module.exports = {
	'0 */24 * * *': ({ strapi }) => {
		strapi.plugin('sitemap').service('core').createSitemap()
	},
}
