import { memo } from 'react'
import cn from 'classnames'

interface IconProps {
	name: string
	className?: string
	section?: string
	size?: 'small' | 'medium' | 'large' | 'custom'
}

const Icon = memo(({ name, className, size = 'small', section = 'common' }: IconProps) => {
	return (
		<svg
			className={cn(className, {
				['h-3.5 w-3.5']: size === 'small',
				['h-5 w-5']: size === 'medium',
				['h-6 w-6']: size === 'large',
			})}
			focusable='false'
			aria-hidden='true'
			fill='currentColor'
		>
			<use xlinkHref={`/sprites/${section}.svg#${name.toLocaleLowerCase()}`} />
		</svg>
	)
})

Icon.displayName = 'Icon'

export { Icon }
export type { IconProps }
