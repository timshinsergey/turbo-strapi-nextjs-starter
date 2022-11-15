import type { StrapiImage } from '../common'

interface SharedSeoMetaSocialComponent {
	id: number
	socialNetwork: 'Facebook' | 'Twitter'
	title?: string
	description?: string
	image?: {
		data?: StrapiImage
	}
}

interface SharedSeoComponent {
	id: number
	metaTitle: string
	metaDescription: string
	metaImage: {
		data: StrapiImage
	}
	metaSocial: SharedSeoMetaSocialComponent[]
	keywords?: string
	metaRobots?: string
	structuredData?: any
	metaViewport?: string
	canonicalURL?: string
}

interface SharedLinkComponent {
	id: number
	href: string
	label: string
	target?: '_blank'
	isExternal: boolean
}

export type { SharedSeoMetaSocialComponent, SharedSeoComponent, SharedLinkComponent }
