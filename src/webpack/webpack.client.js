const path = require('path');

module.exports = {
    mode: 'production',
    target: 'web',
    context: path.join(__dirname, '../client'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, '../../dist/client'),
    },
    module: {
        rules: [
            {
                test: /\.ts$|\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
};
