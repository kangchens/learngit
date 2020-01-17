const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//提取css生成文件
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')//用于压缩代码
/*   clean-webpack-plugin 3.0 以上的版本需要使用对象结构  */
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")//用户拷贝静态资源
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(webpackConfig,{
    mode:"production",
    // 开发工具
    devtool:"#source-map",
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendors:{
                    name:"chunk-vendors",
                    test:/[\\\/]node_modules[\\\/]/,
                    priority:-10,
                    chunks:'initial'
                },
                common:{
                    name:"chunk-common",
                    minChunks:2,
                    priority:-20,
                    chunks:'initial',
                    reuseExistingChunk:true
                }
            }
        }
    },
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
                NODE_ENV:JSON.stringify('production')
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        }),
        new OptimizeCssnanoPlugin({
            sourceMap:true,
            cssnanoOption:{
                preset:[
                    'default',
                    {
                        mergeLonghand:false,
                        cssDeclarationSorter:false
                    }
                ]
            }
        }),
        new CopyWebpackPlugin([
            {
                from:path.resolve(__dirname,'../public'),
                to:path.resolve(__dirname,'../dist')
            }
        ]),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode:'static'//'server','static','disabled'
        })
    ]
})