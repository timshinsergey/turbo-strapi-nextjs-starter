import type { GetServerSideProps } from 'next'

const SiteMap = () => {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const { getSitemap } = await import('@shared/services/strapi')
	const sitemap = await getSitemap()

	res.setHeader('Content-Type', 'text/xml')
	// we send the XML to the browser
	// bug with stylesheet: https://github.com/boazpoolman/strapi-plugin-sitemap/issues/97
	res.write(sitemap.replace('<?xml-stylesheet type="text/xsl" href="xsl/sitemap.xsl"?>', ''))
	res.end()

	return { props: {} }
}

export default SiteMap
