const path = require('path');

module.exports = {

    mode:'development',

    entry: [
      path.resolve(__dirname,'src/js/words.js')
    ],

    output:

        {

            filename: "bundle.js",

            path:path.resolve(__dirname,'build/js')

        },
    module: {

        rules: [

            {

                test: /\.(js|jsx)$/,

                exclude: /node_modules/,

                // use: {
                //
                //     loader: "babel-loader",
                //
                //     options: {
                //
                //         presets: ['@babel/preset-env',"@babel/preset-react"]
                //
                //     }
                // }
            }
        ]
    }
}