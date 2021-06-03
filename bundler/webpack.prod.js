const commonConfiguration = require('./webpack.common.js')

const { merge } = require('webpack-merge')
// This plugin empties the output directory before building
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CleanWebpackPlugin()
        ]
    }
)
