const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    context: path.join(__dirname, '../server'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, '../../dist/server'),
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
