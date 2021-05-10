# Flask SocketIO React server/client

A dynamic Flask SocketIO server with Reactjs client using Bitfinex-api-py cryto data.
A start towards makeing a user based trading algorithm tryout platform using live and
historical data.

## from 'theProject' directory in a terminal run:-

npm install

### build:dev in /client bundles the js, css, scss and static files into /dist

npm run build:dev

To start webpack dev server for client, this poxies to flask server http:/localhost:5000

npm run serve

## in another terminal to start Flask, setup python virtual enviroment:-

python3.8 -m venv venv

source venv/bin/activate

pip3 install -r requirements.txt

python run.py

### eslint can be installed globally or added to package.json "devDependecies":-

babel-eslint@^10.0.3
eslint@^5.16.0
eslint-config-airbnb@^18.0.1
eslint-config-prettier@^6.1.0
eslint-plugin-html@^6.0.0
eslint-plugin-import@^2.18.2
eslint-plugin-json@^1.4.0
eslint-plugin-jsx-a11y@^6.2.3
eslint-plugin-markdown@^1.0.0
eslint-plugin-prettier@^3.1.0
eslint-plugin-react@^7.14.3
eslint-plugin-react-hooks@^1.7.0
prettier@^1.18.2
