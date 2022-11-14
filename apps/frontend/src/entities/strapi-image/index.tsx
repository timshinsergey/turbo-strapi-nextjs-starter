import type { StrapiImage } from '@shared/services/strapi/interfaces/common'
import { memo } from 'react'
import Image from 'next/image'

interface CustomImageProps {
	img: StrapiImage
	className?: string
	layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
	variant?: 'thumbnail' | 'small' | 'medium' | 'large' | 'default'
	priority?: boolean
}

const pickOutImage = (
	variant: 'thumbnail' | 'small' | 'medium' | 'large' | 'default',
	img: StrapiImage
) => {
	if (variant === 'thumbnail' && img.attributes?.formats?.thumbnail) {
		return img.attributes.formats.thumbnail
	}
	if (variant === 'small' && img.attributes?.formats?.small) {
		return img.attributes.formats.small
	}
	if (variant === 'medium' && img.attributes?.formats?.medium) {
		return img.attributes.formats.medium
	}
	if (variant === 'large' && img.attributes?.formats?.large) {
		return img.attributes.formats.large
	}
	return img.attributes
}

const CustomImage = memo(({ variant = 'default', img, layout, ...props }: CustomImageProps) => {
	const image = pickOutImage(variant, img)

	switch (layout) {
		case 'fill':
			return (
				<Image layout={layout} src={image.url} alt={img.attributes.alternativeText} {...props} />
			)
		default:
			return (
				<Image
					src={image.url}
					layout={layout}
					width={image.width}
					height={image.height}
					alt={img.attributes.alternativeText}
					{...props}
				/>
			)
	}
})

CustomImage.displayName = 'CustomImage'

export { CustomImage }
export type { CustomImageProps }
