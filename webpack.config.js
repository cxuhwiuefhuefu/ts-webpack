/*
 * @Author: Sunny
 * @Date: 2022-08-25 11:38:59
 * @LastEditors: Suuny
 * @LastEditTime: 2022-08-25 11:56:51
 * @Description: 
 * @FilePath: /ts-webpack/webpack.config.js
 */
const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    devServer: {
        port: 1998,
        proxy: {

        }
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new htmlwebpackplugin({
            template: './public/index.html'
        })
    ]
}