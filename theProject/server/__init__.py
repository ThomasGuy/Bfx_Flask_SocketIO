"""Flask Create App"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .events import sockio

# Globally accessible libraries
DB = SQLAlchemy()


def create_app(Config):
    """Initialize the core application."""
    app = Flask(__name__,
                instance_relative_config=False,
                static_folder='../../theProject/client/dist',
                )
    app.config.from_object(Config)

    # Initialize Plugins
    DB.init_app(app)
    sockio.init_app(app)

    with app.app_context():
        from theProject.server import routes, data, errors, test, tickers
        app.register_blueprint(routes.bp)
        app.register_blueprint(data.bp)
        app.register_blueprint(errors.err)
        app.register_blueprint(tickers.bp)
        app.register_blueprint(test.bp)

        return app
