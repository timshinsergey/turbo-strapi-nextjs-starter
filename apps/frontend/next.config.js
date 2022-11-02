const path = require('path')

module.exports = {
	output: 'standalone',
	reactStrictMode: true,
	experimental: {
		outputFileTracingRoot: path.join(__dirname, '../../'),
		transpilePackages: ['ui'],
	},
}
