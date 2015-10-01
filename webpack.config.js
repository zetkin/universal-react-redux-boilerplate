var path = require('path');

module.exports = {
    entry: {
        main: './dist/app/client/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist/static'),
        publicPath: 'static',
        filename: '[name].js'
    }
};
