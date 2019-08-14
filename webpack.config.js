const path = require('path');
module.exports = {
    entry: {
        bundle: './app.ts'
    },  
    output: {
        path: path.join(__dirname,'/'),
        filename: '[name].js'
    },
    // Chunk 's setting
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      }
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        contentBase: path.join(__dirname,'/')
    },
    module: {
        rules: [
            {
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}