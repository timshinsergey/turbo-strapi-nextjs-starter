import type { GetStaticProps } from 'next'
import type { HomePageListResponseDataItem } from '@shared/services/strapi/interfaces/single-types/home-page'
import { BlockManager } from '@widgets/block-manager'
import { log } from 'logger'
import Link from 'next/link'

interface PageProps {
	page: HomePageListResponseDataItem
}

const Page = ({ page }: PageProps) => {
	log('Hey! This is Home.')
	return (
		<main>
			<div className='container'>
				<h1>Store</h1>
				<div className='grid grid-flow-col justify-start gap-3'>
					<Link href='/buttons'>
						<a>Buttons</a>
					</Link>
					<Link href='/icon-buttons'>
						<a>Icon Buttons</a>
					</Link>
					<Link href='/button-links'>
						<a>Button Links</a>
					</Link>
				</div>
			</div>
			<BlockManager blocks={page.attributes.blocks} />
		</main>
	)
}

export default Page

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { httpClient } = await import('@shared/services/strapi')
		const [page] = await Promise.all([
			httpClient.homePage.getHomePage({
				populate:
					'*,blocks.logos,blocks.primaryLink,blocks.secondaryLink,blocks.topLink,seo.metaImage,seo.metaSocial.image',
			}),
		])
		return {
			props: { page: page.data.data },
			revalidate: 10,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
