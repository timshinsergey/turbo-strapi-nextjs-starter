import { memo } from 'react'
import Head from 'next/head'

interface SeoProps {
	title: string
	faviconUrl?: string
	slug: string
	description?: string
	image?: string
	keywords?: string
	locales?: string[]
	currentLocale?: string
	index?: boolean
	follow?: boolean
	type?: string
	additionalMetaTags?: { [key: string]: string }[]
	noTags?: boolean
}

const Seo = memo(
	({
		slug,
		title,
		description,
		image,
		keywords,
		index = true,
		follow = true,
		locales,
		currentLocale,
		type = 'website',
		additionalMetaTags,
		noTags = false,
		faviconUrl,
	}: SeoProps) => {
		const formatSlug = slug ? `/${slug}` : ''
		const url = process.env.NEXT_PUBLIC_URL
		return (
			<>
				<Head>
					<title>{title}</title>
					{faviconUrl && <link rel='icon' href={faviconUrl} />}
					{additionalMetaTags &&
						additionalMetaTags.map((item) => (
							<meta key={item.name} name={item.name} content={item.content} />
						))}
					{!noTags && (
						<>
							<meta property='og:title' content={title} />
							{description && <meta property='og:description' content={description} />}
							{description && <meta name='description' content={description} />}
							<meta property='og:type' content={type} />
							{url && <meta property='og:url' content={`${url}${formatSlug}`} />}
							{url && <link href={`${url}${formatSlug}`} rel='canonical' as='' />}
							{image && <meta property='og:image' content={image} />}
							{keywords && <meta name='keywords' content={keywords} />}
							{currentLocale && <meta property='og:locale' content={currentLocale} />}
							{locales &&
								locales.map((locale) => (
									<link
										key={locale}
										rel='alternate'
										hrefLang={locale}
										href={`${url}/${locale}${formatSlug}`}
									/>
								))}
							{locales && (
								<link rel='alternate' hrefLang='x-default' href={`${url}${formatSlug}`} />
							)}
							<meta
								name='robots'
								content={`${index ? 'index' : 'noindex'},${follow ? 'follow' : 'nowfollow'}`}
							/>
						</>
					)}
				</Head>
			</>
		)
	}
)

Seo.displayName = 'Seo'

export { Seo }
export type { SeoProps }
