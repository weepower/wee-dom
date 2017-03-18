const path = require('path');
console.error(__dirname, "/../node_modules");
module.exports = {
	resolve: {
		modules: [
			path.resolve(__dirname, '../lib'),
			path.resolve(__dirname, '../node_modules')
		]
	}
};