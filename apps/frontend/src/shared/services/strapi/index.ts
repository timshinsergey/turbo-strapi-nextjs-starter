import type { NavigationItem } from './interfaces/plugins/navigation'
import { Api } from './api'

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'
const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337/api'
const AUTHORIZATION_TOKEN = process.env.STRAPI_API_TOKEN

const httpClient = new Api({
	baseURL: API_URL,
	headers: { Authorization: `Bearer ${AUTHORIZATION_TOKEN}` },
})

const getNavigation = async (): Promise<NavigationItem[]> => {
	const res = await fetch(`${API_URL}/navigation/render/header?type=TREE`, {
		headers: {
			Authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
		},
	})
	const data = await res.json()

	return data
}

const getSitemap = async () => {
	const res = await fetch(`${STRAPI_URL}/sitemap/index.xml`)
	const data = await res.text()

	return data
}

export { httpClient, getNavigation, getSitemap }
