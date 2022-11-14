import type { StrapiBlock } from '@shared/services/strapi/interfaces/components/blocks'
import { memo } from 'react'
import dynamic from 'next/dynamic'
const LogoCloudsGrid = dynamic(() =>
	import('@widgets/logo-clouds/grid').then((m) => m.LogoCloudsGrid)
)
const HeroSimpleCentered = dynamic(() =>
	import('@widgets/hero/simple-centered').then((m) => m.HeroSimpleCentered)
)

interface BlockManagerProps {
	blocks?: StrapiBlock[]
}

const getBlockComponent = (props: StrapiBlock, index: number) => {
	const key = `index-${index}`

	switch (props.__component) {
		case 'logo-clouds.grid':
			return <LogoCloudsGrid key={key} {...props} />
		case 'hero.simple-centered':
			return <HeroSimpleCentered key={key} {...props} />
		default:
			return null
	}
}

const BlockManager = memo(({ blocks }: BlockManagerProps) => {
	return <>{blocks?.map(getBlockComponent)}</>
})

BlockManager.displayName = 'BlockManager'

export { BlockManager }
export type { BlockManagerProps }
