module.exports = ({ env }) => ({
	seo: {
		enabled: true,
	},
	// upload: {
	//   config: {
	//     provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
	//     providerOptions: {
	//       endpoint: 'https://storage.yandexcloud.net',
	//       accessKeyId: env('AWS_ACCESS_KEY_ID'),
	//       secretAccessKey: env('AWS_ACCESS_SECRET'),
	//       region: env('AWS_REGION'),
	//       params: {
	//         Bucket: env('AWS_BUCKET'),
	//       },
	//     },
	//   },
	// },
	sitemap: {
		enabled: true,
		config: {
			autoGenerate: false,
		},
	},
})
