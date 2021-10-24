const commonConfiguration = require('./webpack.common.js')

const { merge } = require('webpack-merge')
const portFinderSync = require('portfinder-sync')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'development',
        devServer:
        {
            host: '127.0.0.1',
            port: portFinderSync.getPort(8080),
            open: true,
            https: false,
        }
    }
)
