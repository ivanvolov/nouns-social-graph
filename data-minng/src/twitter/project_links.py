from selenium import webdriver
import requests
import csv
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import os

def read_urls_from_csv(file_path, column_name):
    urls = []
    with open(file_path, mode='r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            urls.append(row[column_name])
    return urls

urls = read_urls_from_csv("src/twitter/core.csv", "Link")

def download_image(image_url, save_path):
    img_data = requests.get(image_url).content
    with open(save_path, 'wb') as handler:
        handler.write(img_data)
    print(f"Image downloaded and saved to {save_path}")


chrome_options = Options()
# chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
driver = webdriver.Chrome(options=chrome_options)

def get_data_from_page(url):
    # print(f"I'm working on the link: {url}")
    driver.get(url+'/photo')
    
    # Add a wait to ensure the content is loaded
    time.sleep(5)
    
    html_content = driver.page_source
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    img = soup.find("img", class_="css-9pa8cd")
    print(img['src'])


num = 0
for url in urls:
    get_data_from_page(url)
    num+=1


driver.quit()