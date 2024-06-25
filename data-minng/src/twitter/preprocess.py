import pandas as pd
import json
import requests
from PIL import Image, ImageDraw
from io import BytesIO
import os

# Load the CSV file
file_path = 'src/twitter/lists.csv'
data = pd.read_csv(file_path)

top_20_data = data

json_array = []
for index, row in top_20_data.iterrows():
    json_entry = {
        "id": row["Name"],
        "title": row["Name"],
        "shape": "image",
        "image": f'images/{row["Name"]}_round.png',
        "size": 20,
    }
    json_array.append(json_entry)

# Convert the list to JSON format
json_output = json.dumps(json_array, indent=2)
print(json_output)


def download_images(data):
    os.makedirs('images', exist_ok=True)
    missing_images = []
    for index, entry in data.iterrows():
        image_url = entry['Image']
        try:
            print(image_url)
            response = requests.get(image_url)
            response.raise_for_status()
            img = Image.open(BytesIO(response.content)).convert("RGBA")

            id = entry["Name"]
            # Save the original image
            # img.save(f"images/{id}.png")

            # Create a circular image
            mask = Image.new('L', img.size, 0)
            draw = ImageDraw.Draw(mask)
            # Calculate the coordinates for the ellipse with 1px less radius
            left = 1
            top = 1
            right = img.size[0] - 1
            bottom = img.size[1] - 1

            # Draw the ellipse on the mask
            draw.ellipse((left, top, right, bottom), fill=255)
            img.putalpha(mask)

            # Save the circular image
            img.save(f"images/{id}_round.png")
        except Exception as e:
            print(f"Failed to process image for {id} from URL {image_url}: {e}")
            missing_images.append(image_url)
            exit(0)

    if missing_images:
        print("\nMissing or failed images:")
        for url in missing_images:
            print(url)

# download_images(top_20_data)
