const path = import('path');

module.exports = {
    entry: 'static/js/index.js',
    watch: true,
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [
            '.js'
        ]
    }
};
