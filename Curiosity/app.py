from flask import Flask
from Curiosity.controllers import register_controllers


def create_app():
	app = Flask(__name__)

	register_controllers(app)

	if __name__ == "__main__":
		app.run()

	return app
