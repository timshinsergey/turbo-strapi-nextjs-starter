import type { SharedLinkComponent } from '../shared'

interface BlockHeroSimpleCentered {
	id: number
	__component: 'hero.simple-centered'
	topLink?: SharedLinkComponent
	topText?: string
	title: string
	description: string
	primaryLink?: SharedLinkComponent
	secondaryLink?: SharedLinkComponent
}

export type { BlockHeroSimpleCentered }
