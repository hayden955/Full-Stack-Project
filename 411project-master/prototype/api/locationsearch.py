import urllib.request
import requests
from requests.api import get
import json

class Search:
    API_KEY = ""

    def __init__(self, query):
        self.query = query.replace(" ", "")
    
    def get_coordinates(self):
        Google_query = "https://maps.googleapis.com/maps/api/geocode/json?address="+ str(self.query)+ "&key=" + "AIzaSyBOELQfMOZ1471SmQvn4oD6v-F0pjjUhlo"
        Google_request = requests.get(Google_query)
        Google_JSON = Google_request.json()
        Google_coordinates = Google_JSON['results'][0]['geometry']['location']
        lat = Google_coordinates['lat']
        lon = Google_coordinates['lng']
        Location = (lat,lon)
        return Location
