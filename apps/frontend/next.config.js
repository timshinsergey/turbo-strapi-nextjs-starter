const path = require('path')

module.exports = {
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'en',
	},
	output: 'standalone',
	reactStrictMode: true,
	experimental: {
		outputFileTracingRoot: path.join(__dirname, '../../'),
		transpilePackages: ['ui'],
	},
}
