var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                /* {
                  "pragma": "dom", // default pragma is React.createElement
                  "pragmaFrag": "DomFrag", // default is React.Fragment
                  "throwIfNamespace": false // defaults to true
                } */
              ],
            plugins: [
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      }
    ]
  }
};