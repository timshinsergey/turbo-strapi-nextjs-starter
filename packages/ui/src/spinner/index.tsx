import { memo } from 'react'
import cn from 'classnames'

interface SpinnerProps {
	svgClassName?: string
	ariaLabelledby?: string
}

const Spinner = memo(({ svgClassName = 'w-4 h-4', ariaLabelledby }: SpinnerProps) => {
	return (
		<span role='progressbar' aria-labelledby={ariaLabelledby} className='animate-spin inline-flex'>
			<svg
				viewBox='22 22 44 44'
				className={cn(svgClassName, 'animate-spinner inline-flex stroke-current stroke-3')}
				focusable='false'
				aria-hidden='true'
			>
				<circle cx='44' cy='44' r='14' fill='none' />
			</svg>
		</span>
	)
})

Spinner.displayName = 'Spinner'

export { Spinner }
export type { SpinnerProps }
