const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config');
const webpack = require("webpack");
module.exports = merge(webpackConfig,{
    mode:"development",
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:'less-loader'
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:JSON.stringify('development')
            }
        })
    ]
})