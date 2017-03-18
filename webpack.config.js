const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
	entry: './index',
	devtool: env === 'prod' ? 'source-map' : 'false',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: env === 'prod' ? 'wee-dom.min.js' : 'wee-dom.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						[
							'es2015',
							{ modules: false } // Stops es2015 preset from generating commonjs modules
						]
					]
				}
			}
		]
	}
};