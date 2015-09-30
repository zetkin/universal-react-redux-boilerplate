import app from './app';

const port = process.env.APP_PORT || 8000;

const server = app.listen(port, function() {
    const addr = server.address();

    console.log('Listening on http://%s:%s', addr.address, addr.port);
});
