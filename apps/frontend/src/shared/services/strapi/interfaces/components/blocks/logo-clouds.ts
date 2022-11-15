import type { StrapiImage } from '../../common'

interface BlockLogoCloudsGrid {
	id: number
	__component: 'logo-clouds.grid'
	title?: string
	logos?: {
		data: StrapiImage[]
	}
}

export type { BlockLogoCloudsGrid }
