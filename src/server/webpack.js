import merge from 'deepmerge';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../../../webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';


const config = merge({
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot'],
            include: path.join(__dirname, '..')
        }]
    }
}, webpackConfig);

// TODO: Use environment variables for port and host
config.output.publicPath =  'http://localhost:8080/static';

const server = new WebpackDevServer(webpack(config), {
    contentBase: './dist',
    publicPath: config.output.publicPath,
    hot: true,
    stats: { colors: true }
});

// TODO: Use environment variables for port and host
server.listen(8080, "localhost", function() {});
