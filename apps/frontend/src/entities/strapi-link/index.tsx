import type { ReactNode } from 'react'
import type { SharedLinkComponent } from '@shared/services/strapi/interfaces/components/shared'
import { memo } from 'react'
import Link from 'next/link'

interface CustomLinkProps extends SharedLinkComponent {
	className?: string
	onClick?: () => void
	children?: ReactNode
}

const CustomLink = memo(
	({
		className,
		isExternal,
		target,
		href,
		label,
		onClick,
		children,
	}: CustomLinkProps): JSX.Element => {
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

CustomLink.displayName = 'CustomLink'

export { CustomLink }
export type { CustomLinkProps }
