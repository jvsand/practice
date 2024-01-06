const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    target:"node",
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.css$/,
                // クライアントサイドとして別に作成
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                ],
                // use: ['style-loader', 'css-loader'],
              },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                    },
                },
            },
        ],
    },
    externals: ['express'],
    plugins: [
        new MiniCssExtractPlugin({
            filename:'./dist/style.css'
        })
    ],
};
