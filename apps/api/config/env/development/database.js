const path = require('path')

module.exports = ({ env }) => ({
	// connection: {
	// 	client: 'mysql',
	// 	connection: {
	// 		host: env('DATABASE_HOST', 'localhost'),
	// 		port: env.int('DATABASE_PORT', 3306),
	// 		database: env('DATABASE_NAME', 'strapi'),
	// 		user: env('DATABASE_USERNAME', 'strapi'),
	// 		password: env('DATABASE_PASSWORD', 'strapi'),
	// 		ssl: {
	// 			rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
	// 		},
	// 	},
	// 	debug: false,
	// },
	connection: {
		client: 'sqlite',
		connection: {
			filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
		},
		useNullAsDefault: true,
	},
})
