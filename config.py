"""Flask config class."""
import os


class Config:
    """Base config vars."""
    SECRET_KEY = os.getenv('SECRET_KEY') or 'secret'
    SESSION_COOKIE_NAME = os.getenv('SESSION_COOKIE_NAME') or 'cookie'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_ENABLED = True
    HOST_NAME = 'localhost:5000'


class ProdConfig(Config):
    DEBUG = False
    TESTING = False
    DATABASE_URI = os.getenv('PROD_DATABASE_URI') or None


class DevConfig(Config):
    DEBUG = True
    TESTING = False
    DATABASE_URI = os.getenv('DEV_DATABASE_URI') or None
