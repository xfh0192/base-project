let _ = require('lodash')
let WebpackDevServer = require('webpack-dev-server')
let Webpack = require('webpack')

let commonConfig = require('./webpack.common')

let config = _.assignIn({}, commonConfig, {
  devtool: 'eval-source-map',
  optimization: {
    noEmitOnErrors: true
  }
})
const devServerOptions = { 
  port: 8888,
  open: true,
};

const compiler = Webpack(config);
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();