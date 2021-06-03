const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This plugin is an alternative to the style-loader, which seems to be better suited for static webpages
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// TODO: work in progress
// const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // publicPath: '/dist',
        filename: 'js/[name].bundle.js',
        assetModuleFilename: 'static/[hash][ext][query]'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // Handlebars
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            // Path to your custom js file, which has Handlebars with custom helpers registered
                            runtime: path.join(__dirname, 'handlebars.config.js'),
                            precompileOptions: {
                                knownHelpersOnly: false,
                            },
                            inlineRequires: '/assets/*/'
                        },
                    }
                ]
            },
            // JS
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /extlib/],
                use: ['babel-loader'],
                // options: { presets: ['@babel/env'] }
            },
            // SASS, CSS
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            // Images
            {
                test: /\.(png|jpg|jpeg|gif|webp|avif)$/i,
                type: 'asset/resource', // Webpack 5.x: loads file into output folter (file-loader)
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/source' // basically a raw loader
                // type: 'asset/inline' // 'inlines' image data into img src
            },
            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource', // Webpack 5.x: loads file into output folter (file-loader)
            },
            // GLSL
            {
                test: /\.(glsl|vs|fs|vert|frag)$/i,
                type: 'asset/source', // Webpack 5.x: loads file content into bundled JS file (raw-loader)
                exclude: /node_modules/
            },
            // { test: /\.(glsl|vs|fs|vert|frag)$/i, loader: 'glslify-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        // new StylelintPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.hbs',
            favicon: './src/assets/icons/favicon.ico'
        })
    ]
}
