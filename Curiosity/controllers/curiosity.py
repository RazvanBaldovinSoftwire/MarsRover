import os
from datetime import datetime

import requests
from flask import request


def curiosity_routes(app):
	@app.route('/apod', methods=['GET'])
	def picture_of_the_day():
		date = request.args.get("date") if request.args.get("date") else datetime.today().strftime('%Y-%m-%d')

		response = requests.get('https://api.nasa.gov/planetary/apod',
								params={'date': date, 'api_key': os.getenv('NASA_API_KEY')})

		return response.json()

	@app.route('/mars_rover', methods=['GET'])
	def mars_rover():
		date = request.args.get("earth_date")

		if date is None:
			return "No date provided"

		response = requests.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
								params={'earth_date': date, 'api_key': os.getenv('NASA_API_KEY')})

		return response.json()

	@app.route('/epic', methods=['GET'])
	def earth_picture():
		date = request.args.get("date")

		if date is None:
			return "No date provided"

		url = "https://api.nasa.gov/EPIC/api/natural/date/" + date
		response = requests.get(url, params={'api_key': os.getenv('NASA_API_KEY')})

		return response.json()