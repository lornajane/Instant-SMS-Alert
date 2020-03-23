import os
from dotenv import load_dotenv

class Config(object):
    nexmo_api_key = os.getenv('NEXMO_API_KEY')
    nexmo_api_secret = os.getenv('NEXMO_API_SECRET')
    nexmo_number = os.getenv('NEXMO_NUMBER')
