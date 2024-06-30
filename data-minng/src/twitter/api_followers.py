import tweepy
from dotenv import load_dotenv
import os
import pandas as pd
import time

# Load environment variables from .env file
load_dotenv()

# Retrieve API keys and tokens from environment variables
API_KEY = os.getenv('API_KEY')
API_SECRET_KEY = os.getenv('API_SECRET_KEY')
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
ACCESS_TOKEN_SECRET = os.getenv('ACCESS_TOKEN_SECRET')

# Authenticate to the Twitter API
auth = tweepy.OAuthHandler(API_KEY, API_SECRET_KEY)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

def get_followers(screen_name, count):
    followers = []
    try:
        for follower in tweepy.Cursor(api.followers, screen_name=screen_name, count=200).items(count):
            followers.append({
                'name': follower.name,
                'screen_name': follower.screen_name,
                'location': follower.location,
                'description': follower.description,
                'followers_count': follower.followers_count
            })
            # Add sleep to handle rate limits
            time.sleep(1)
    except tweepy.TweepError as e:
        print(f"Error: {str(e)}")
    return followers

if __name__ == "__main__":
    accounts_df = pd.read_csv('accounts.csv')
    total_followers = []

    for index, row in accounts_df.iterrows():
        screen_name = row['screen_name']
        print(f"Fetching followers for {screen_name}")
        followers = get_followers(screen_name, 1000)
        total_followers.extend(followers)
        # Add sleep to avoid hitting rate limits
        time.sleep(15 * 60)

    # Convert the list of followers to a DataFrame
    followers_df = pd.DataFrame(total_followers)
    followers_df.to_csv('followers.csv', index=False)
    print("Followers have been saved to followers.csv")
