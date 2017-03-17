const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
	entry: './index',
	devtool: env === 'prod' ? 'source-map' : 'false',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: env === 'prod' ? 'wee-dom.min.js' : 'wee-dom.js',
		libraryTarget: 'umd'
	}
};