module.exports = {
    entry: "./game/index.jsx",
    output: {
        path: __dirname,
        filename: "dist/index.js"
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        root: __dirname,
        alias: {
            Game: "game/components/Game/Game.jsx",
            Board: "game/components/Board/Board.jsx",
            Field: "game/components/Field/Field.jsx"
        }
    },
    module: {
        loaders: [
            {
             
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
            },
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
            ,
            {
                loaders: ["style-loader", "css-loader"],
                test: /\.css$/,
                exclude: /(node_modules)/
            },
            {
              loader: 'file-loader',
              test: /\.(png|jpg|gif)$/,
              options: {
                name (file) {
                  if (env === 'development') {
                    return '[path][name].[ext]'
                  }

                  return '[hash].[ext]'
                }
              }  
            }           
        ]
    }
};
