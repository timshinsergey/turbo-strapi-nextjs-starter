interface NavigationItem {
	id: number
	title: string
	menuAttached: boolean
	order: number
	path: string
	type: 'WRAPPER' | 'INTERNAL' | 'EXTERNAL'
	uiRouterKey: string
	slug: string
	external: boolean
	items?: NavigationItem[]
	related?: any
}

export type { NavigationItem }
