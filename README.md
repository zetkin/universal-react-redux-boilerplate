# React/Redux universal boilerplate
This repository contains boilerplate for a universal app built from these
amazing open-source technologies:

* React.js for view rendering (universal)
* Redux as a Flux implementation (universal)
* Express for the server-side routing and logic
* Gulp for build task management
* Webpack for bundling javascript
* React Hot Loader and Redux Dev Tools for fast iteration during development

Universal means that the same code is run both on the server and on the client
(Browser). The language used is EcmaScript 2015 (modern Javascript) with some
future, experimental additions (e.g. decorators) which is transpiled to
deployable JS using Babel. The app can be run using the bundled Docker image,
or deployed to any environment that supports Node.js.

This is the setup that we are transitioning our applications to at the Zetkin
Foundation.

## Development
When developing using this set-up, you should be running three long-running
tasks. Start them in three different terminal windows for simplicity

### Watcher
The (Gulp) watcher transpiles Javascript, translates SCSS and minifies images
as they are changed. Run it using npm run:

    $ npm run dev:watch

### Hot loading server
The Webpack development server is used to reload React components on the fly
as their source code changes. It transfers already transpiled javascript to
the client which hot loads them in place.

    $ npm run dev:hotload

### Application server
Thirdly, the application server must be run. This is the same as the server
that is also used in production, but without the `NODE_ENV` variabe defined.

See separate instructions depending on whether you want to run using the Node
version installed on the host system or in Docker.

## Build and run

    $ npm install
    $ NODE_ENV=production npm start

## Running in Docker
This repository contains a [Docker][1] image definition that can be used to
run the boilerplate application in a Docker container which contains all the
necessary system dependencies. The repository also contains and a config file
for [Docker Compose][2], which simplifies building and starting the image.

If you don't already have a docker machine running, you might first have to
follow the [Docker Machine setup instructions][3]. Once that's done, starting
the boilerplate app is as easy as:

    $ cd env
    $ docker-compose up

This will install the dependencies using npm (on the first run) and then start
the application server.

Node will be running on port 8000 of the IP address of your machine, e.g. the
one returned by `docker-machine ip default`, if "default" is the name of your
Docker machine.

[1]: https://www.docker.com
[2]: https://www.docker.com/docker-compose
[3]: https://docs.docker.com/machine/get-started/
