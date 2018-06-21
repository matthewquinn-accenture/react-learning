var webpack = require("webpack")

module.exports = {
    entry: "./src/index.js", /** entry: src file to transpile KV */
    output: { /** output: where you want to output transpiled files K */
        filename: "bundle.js", /** filename: name of the file you're outputting V, KV*/
    },
    devServer: { /** its the server we run everything on */
        inline: true, /** turn on auto-reload for changes in our code */
        contentBase: './dist', /** where the files we want to compile are located */
        port: 3000 /** the port we want to run on: localhost:3000 */
    },
    module: {
        rules: [ /** different tasks we want webpack to perform*/
            {
                test: /\.js$/, /** regex: look for any file with .js at the end  */
                exclude: /(node_modules)/, /** exclude the node_modules folder */
                loader: 'babel-loader', /** use the babel-loader for this whole thing */
                query: { /** specifiy the presets we want*/
                    presets: ["env", "react"] /** using presets in the babelrc */
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
        ]
    }
}