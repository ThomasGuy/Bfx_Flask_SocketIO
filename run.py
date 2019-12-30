''' kick off '''
from theProject.server import create_app, sockio
from theProject.server.api import bfxData
# import config

app = create_app('config.DevConfig')


if __name__ == "__main__":
    sockio.run(app, debug=True, port=5000)
