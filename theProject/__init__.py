"""Init Logging"""
from pathlib import Path
import logging

PATH = Path().cwd() / 'logs' / 'logs.log'

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                    datefmt='%m-%d %H:%M',
                    filename=PATH,
                    filemode='w')
