import type { ReactNode } from 'react'
import type { SharedLinkComponent } from '@shared/services/strapi/interfaces/components/shared'
import { memo } from 'react'
import Link from 'next/link'

interface StrapiLinkProps extends SharedLinkComponent {
	className?: string
	onClick?: () => void
	children?: ReactNode
}

const StrapiLink = memo(
	({ className, isExternal, target, href, label, onClick, children }: StrapiLinkProps) => {
		if (isExternal) {
			return (
				<a
					className={className}
					href={href}
					target={target}
					rel='nofollow noopener noreferrer'
					onClick={onClick}
				>
					{!children && label}
					{children}
				</a>
			)
		} else {
			return (
				<Link href={href} target={target}>
					<a className={className} onClick={onClick}>
						{!children && label}
						{children}
					</a>
				</Link>
			)
		}
	}
)

StrapiLink.displayName = 'StrapiLink'

export { StrapiLink }
export type { StrapiLinkProps }
