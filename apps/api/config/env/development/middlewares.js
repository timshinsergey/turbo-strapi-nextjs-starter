module.exports = ({ env }) => [
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:'],
					'img-src': [
						"'self'",
						'data:',
						'blob:',
						`https://${env('AWS_BUCKET')}.storage.yandexcloud.net`,
					],
					'media-src': [
						"'self'",
						'data:',
						'blob:',
						`https://${env('AWS_BUCKET')}.storage.yandexcloud.net`,
					],
					'script-src': ["'self'", 'blob:'],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
]
