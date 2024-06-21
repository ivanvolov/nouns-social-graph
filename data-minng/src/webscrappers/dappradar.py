from selenium import webdriver
import requests
import argparse
import csv
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import os

def remove_file_if_exists(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"{file_path} has been removed.")
    else:
        print(f"{file_path} does not exist.")

def read_urls_from_csv(file_path, column_name):
    urls = []
    with open(file_path, mode='r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            urls.append(row[column_name])
    return urls

urls = read_urls_from_csv("src/webscrappers/links.csv", "Link")

def download_image(image_url, save_path):
    img_data = requests.get(image_url).content
    with open(save_path, 'wb') as handler:
        handler.write(img_data)
    print(f"Image downloaded and saved to {save_path}")

def save_data_to_csv(file_path, data):
    file_exists = os.path.isfile(file_path)
    with open(file_path, mode='a', newline='', encoding='utf-8-sig') as csvfile:
        fieldnames = ['name', 'volume', 'image_url']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        if not file_exists:
            writer.writeheader()
        
        writer.writerow(data)
    
chrome_options = Options()
# chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
driver = webdriver.Chrome(options=chrome_options)

def get_data_from_page(url):
    print(f"I'm working on the link: {url}")
    driver.get(url)
    
    # Add a wait to ensure the content is loaded
    time.sleep(5)
    if num == 21938:
        time.sleep(5)
    # if num == 21939:
    #     # time.sleep(5)    
    #     time.sleep(3000000)
    
    html_content = driver.page_source
    
    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the chapter title
    name = soup.find("h1", class_="sc-DnCCm eAsSkX")
    print(name.text)
    volume = soup.find("div", class_="sc-cabOPr jdPPvJ")
    print(volume.text)

    image = soup.find("img", class_="sc-gScZFl fnEzwn sc-jTevDH caOPIj img-loaded")

    if image:
        image_url = image['src']
        print(f"Image URL: {image_url}")
        # Download the image
        # download_image(image_url, f"downloaded_images/{os.path.basename(image_url)}")

    else:
        print("Image not found")
    
    # if num == 21939:
    #     # time.sleep(5)    
    #     time.sleep(3000000)
    data = {
        'name': name.text,
        'volume':  volume.text,
        'image_url': image['src'] if image else None
    }
    save_data_to_csv("output_data.csv", data)

    time.sleep(3)


num = 21938
for url in urls:
    get_data_from_page(url)
    num+=1


driver.quit()