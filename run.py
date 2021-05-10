''' kick off '''
from theProject.server import create_app
from theProject.server.api.bfxData import bfx

app, sockio = create_app('config.DevConfig')


if __name__ == "__main__":
    bfx.ws.run()
    sockio.run(app, debug=True, port=5000)
