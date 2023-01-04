# Some experimentation with the boardgame.io framework

I followed the [`boardgame.io` tutorial](https://boardgame.io/documentation/#/tutorial),
using React.js.


## developing

After installing Node.js and cloning this repo, run `npm install`.
(This creates `./node_modules`, taking up about 500MB.)

We can run a local gamemaster server (backend) by `npm run gamemaster-server`
and serve the web app on a local web server by `npm start` (in another terminal).


## deploying

To host the app on a public Nginx server:
- Clone the repo on the public server and run `npm install` there.
- Change the server address in `src/GomokuClient.js`
  from `'localhost:8000'` to the desired one,
  like `'https://example.org/'`.
- Run `npm run build`.
- Copy the contents of the resulting `build` directory
  somewhere below the web root served by Nginx.
- Start the gamemaster server on the public server
  just like we would do it locally: `npm run gamemaster-server`.
- Configure Nginx to forward the path `/socket.io/` to `localhost:8000`,
  taking care to allow WebSocket connections.

In NixOS, we can configure Nginx like this:
``` nix
locations."/socket.io/" = {
  proxyPass = "http://localhost:8000";
  proxyWebsockets = true;
};
```
