var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'dist/app/client/main.js')
    ],
    output: {
        path: path.join(__dirname, 'dist/static'),
        publicPath: 'static',
        filename: '[name].js'
    }
};
