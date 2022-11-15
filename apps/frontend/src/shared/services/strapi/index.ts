import type { NavigationItem } from './interfaces/plugins/navigation'
import { Api } from './api'

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

export { httpClient, getNavigation }
