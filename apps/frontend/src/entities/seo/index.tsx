import type { FC } from 'react'
import { memo } from 'react'
import Head from 'next/head'

export interface SeoProps {
	title: string
	faviconUrl?: string
	slug?: string
	description?: string
	image?: string
	keywords?: string
	currentLocale?: string
	index?: boolean
	follow?: boolean
	type?: string
	additionalMetaTags?: { [key: string]: string }[]
	noTags?: boolean
	localizations?: {
		slug: string
		locale: string
	}[]
}

const Seo: FC<SeoProps> = ({
	slug,
	title,
	description,
	image,
	keywords,
	index = true,
	follow = true,
	currentLocale,
	type = 'website',
	additionalMetaTags,
	noTags = false,
	faviconUrl,
	localizations,
}): JSX.Element => {
	const url = process.env.NEXT_PUBLIC_URL
	const alternates =
		localizations && localizations.length > 0
			? [
					...localizations.map((item) => ({
						href: `${url}${item.locale === 'en' ? '' : `/${item.locale}`}${
							item.slug ? `/${item.slug}` : ''
						}`,
						hrefLang: item.locale,
					})),
					{
						href: `${url}${currentLocale === 'en' ? '' : `/${currentLocale}`}${
							slug ? `/${slug}` : ''
						}`,
						hrefLang: currentLocale,
					},
					{ href: `${url}${slug ? `/${slug}` : ''}`, hrefLang: 'x-default' },
			  ]
			: []
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
						{url && (
							<meta
								property='og:url'
								content={`${url}${
									currentLocale === 'en' ? '' : `/${currentLocale}${slug ? `/${slug}` : ''}`
								}`}
							/>
						)}
						{url && (
							<link
								href={`${url}${
									currentLocale === 'en' ? '' : `/${currentLocale}${slug ? `/${slug}` : ''}`
								}`}
								rel='canonical'
								as=''
							/>
						)}
						{image && <meta property='og:image' content={image} />}
						{keywords && <meta name='keywords' content={keywords} />}
						{currentLocale && <meta property='og:locale' content={currentLocale} />}
						{alternates.map((item) => (
							<link key={item.hrefLang} rel='alternate' hrefLang={item.hrefLang} href={item.href} />
						))}
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

Seo.displayName = 'Seo'

export default memo(Seo)
