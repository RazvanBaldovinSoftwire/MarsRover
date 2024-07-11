from Curiosity.controllers.curiosity import curiosity_routes


def register_controllers(app):
    curiosity_routes(app)