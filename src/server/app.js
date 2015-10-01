import { createStore } from 'redux';
import express from 'express';
import path from 'path';
import React from 'react/addons';
import { Provider } from 'react-redux';

import appState from '../reducers';
import App from '../components/App';


const app = express();

app.use('/static/', express.static(
    path.join(__dirname, '../../static'),
    { fallthrough: false }));

app.use(function(req, res, next) {
    req.store = createStore(appState);

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
