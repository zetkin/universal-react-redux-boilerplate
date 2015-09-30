import express from 'express';
import React from 'react/addons';

import App from '../components/App';


const app = express();


app.use(function(req, res, next) {
    try {
        const html = React.renderToString(
            React.createElement(App)
        );

        res.send(html);
    }
    catch (err) {
        // Implement error handling/logging here
        throw err;
    }
});

export default app;
