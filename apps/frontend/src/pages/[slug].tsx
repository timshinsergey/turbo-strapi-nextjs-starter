import type { GetServerSideProps } from 'next'
import type { HomePageListResponseDataItem } from '@shared/services/strapi/interfaces/single-types/home-page'
import { BlockManager } from '@widgets/block-manager'
import { log } from 'logger'
import Link from 'next/link'

interface PageProps {
	page: HomePageListResponseDataItem
	locale: string
}

const Page = ({ page, locale }: PageProps) => {
	log('Hey! This is Page.')
	console.log('page', page)
	console.log('locale', locale)
	return (
		<main>
			{/* <div className='container'>
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
			</div> */}
			{/* <BlockManager blocks={page.attributes.blocks} /> */}
		</main>
	)
}

export default Page

export const getServerSideProps: GetServerSideProps = async ({ locale, defaultLocale, query }) => {
	const currentLocale = locale || defaultLocale!
	try {
		if (!query.slug) {
			throw new Error()
		}
		const { httpClient } = await import('@shared/services/strapi')
		const [page] = await Promise.all([
			httpClient.page.getPages({
				populate:
					'*,blocks.logos,blocks.primaryLink,blocks.secondaryLink,blocks.topLink,localizations,seo.metaImage,seo.metaSocial.image',
				filters: {
					slug: {
						$eq: query.slug,
					},
				},
				locale: currentLocale,
			}),
		])
		if (page.data.data.length === 0) {
			throw new Error()
		}
		return {
			props: { page: page.data.data, locale: currentLocale },
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
