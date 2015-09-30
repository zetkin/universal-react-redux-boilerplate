# React/Redux universal boilerplate
This repository contains boilerplate for a universal app built from these
amazing open-source technologies:

* React.js for view rendering (universal)
* Redux as a Flux implementation (universal)
* Express for the server-side routing and logic

Universal means that the same code is run both on the server and on the client
(Browser). The language used is EcmaScript 2015 (modern Javascript) with some
future, experimental additions (e.g. decorators) which is transpiled to
deployable JS using Babel. The app can be run using the bundled Docker image,
or deployed to any environment that supports Node.js.

This is the setup that we are transitioning our applications to at the Zetkin
Foundation.

## Running in Docker
This repository contains a [Docker][1] image definition that can be used to
run the boilerplate application, and a [Docker Compose][2] configuration to
build and start the image.

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
