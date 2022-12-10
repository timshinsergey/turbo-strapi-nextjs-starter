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

const BlockManager = memo(({ blocks }: BlockManagerProps) => {
	return (
		<>
			{blocks?.map((block, idx) => {
				switch (block.__component) {
					case 'logo-clouds.grid':
						return <LogoCloudsGrid key={block.__component + idx} {...block} />
					case 'hero.simple-centered':
						return <HeroSimpleCentered key={block.__component + idx} {...block} />
					default:
						return null
				}
			})}
		</>
	)
})

BlockManager.displayName = 'BlockManager'

export { BlockManager }
export type { BlockManagerProps }
