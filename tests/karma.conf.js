const fs = require('fs');
const resolve = require('path').resolve;

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai'],
		files: [
			'./**/*.js'
		],
		exclude: [],
		preprocessors: {
			'./**/*.js': ['webpack']
		},

		// Webpack
		webpackMiddleware: {
			stats: 'errors-only'
		},
		webpack: require('./webpack.config.js'),

		// Reporters
		reporters: ['mocha'],
		mochaReporter: {
			showDiff: true
		},

		// Server
		protocol: 'https',
		port: 9876,
		httpsServerOptions: {
			key: fs.readFileSync(resolve(__dirname, '../https/server.key'), 'utf8'),
			cert: fs.readFileSync(resolve(__dirname, '../https/server.crt'), 'utf8')
		},

		// Logging
		colors: true,
		logLevel: config.LOG_ERROR,

		// Browsers
		browsers: ['Chrome'],

		// Test runner config
		autoWatch: true,
		singleRun: false,
		concurrency: Infinity // How many browsers to be launched at once
	})
};
