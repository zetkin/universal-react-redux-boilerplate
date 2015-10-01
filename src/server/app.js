import express from 'express';
import path from 'path';
import React from 'react/addons';
import { Provider } from 'react-redux';

import { appState, finalCreateStore } from '../reducers';
import App from '../components/App';


const app = express();

if (process.env.NODE_ENV !== 'production') {
    // When not in production, redirect requests for the main JS file to the
    // Webpack dev server running on localhost.
    // TODO: Configure dev server using environment variables?
    app.get('/static/main.js', function(req, res) {
        res.redirect(303, 'http://localhost:8080/static/main.js');
    });
}

app.use('/static/', express.static(
    path.join(__dirname, '../../static'),
    { fallthrough: false }));

app.use(function(req, res, next) {
    req.store = finalCreateStore(appState);

    try {
        const html = React.renderToString(
            <Provider store={ req.store }>
                { () => <App /> }
            </Provider>
        );

        res.send(html);
    }
    catch (err) {
        // Implement error handling/logging here
        throw err;
    }
});

export default app;
