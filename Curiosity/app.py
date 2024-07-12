from flask import Flask
from Curiosity.controllers import register_controllers
from flask_cors import CORS, cross_origin


def create_app():
	app = Flask(__name__)
	CORS(app)

	register_controllers(app)

	if __name__ == "__main__":
		app.run()

	return app
