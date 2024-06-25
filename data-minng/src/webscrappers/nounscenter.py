import csv
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
from urllib.parse import urlparse
import re

def get_twitter_link(driver):
    # Look for Twitter or X links
    twitter_patterns = [
        r'https?://(www\.)?(twitter|x)\.com/[a-zA-Z0-9_]+',
        r'https?://(www\.)?t\.co/[a-zA-Z0-9]+'
    ]
    
    for pattern in twitter_patterns:
        twitter_links = driver.find_elements(By.XPATH, f"//a[contains(@href, 'twitter.com') or contains(@href, 'x.com') or contains(@href, 't.co')]")
        for link in twitter_links:
            href = link.get_attribute('href')
            if href and re.match(pattern, href):
                return href
    return None

def process_csv(file_path):
    results = []

    chrome_options = Options()
    # chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    driver = webdriver.Chrome(options=chrome_options)
    
    # Set up Selenium WebDriver (make sure to have the appropriate driver installed)
    driver = webdriver.Chrome()  # Or use Firefox, Safari, etc.
    
    with open(file_path, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            name = row['name']
            url = row['url']
            
            print(f"Processing: {name} - {url}")
            
            try:
                # Load the webpage
                driver.get(url)

                time.sleep(5)

                
                # Wait for the page to load (adjust timeout as needed)
                WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
                
                # Get the page title
                title = driver.title
                
                # Find Twitter link
                twitter_link = get_twitter_link(driver)
                print(twitter_link)
                
                results.append({
                    'name': name,
                    'url': url,
                    'title': title,
                    'twitter_link': twitter_link
                })
                
            except TimeoutException:
                print(f"Timeout occurred for {url}")
                results.append({
                    'name': name,
                    'url': url,
                    'title': 'Timeout occurred',
                    'twitter_link': None
                })
            except Exception as e:
                print(f"An error occurred for {url}: {str(e)}")
                results.append({
                    'name': name,
                    'url': url,
                    'title': f'Error: {str(e)}',
                    'twitter_link': None
                })

            # time.sleep(5000000)
    
    driver.quit()
    return results

def save_results(results, output_file):
    with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['name', 'url', 'title', 'twitter_link']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for row in results:
            writer.writerow(row)

if __name__ == "__main__":
    input_csv = "src/webscrappers/nouns_projects.csv"  # Replace with your input CSV file path
    output_csv = "nouns_projects_with_twitter.csv"  # Output file path
    
    results = process_csv(input_csv)
    save_results(results, output_csv)
    
    print(f"Processing complete. Results saved to {output_csv}")