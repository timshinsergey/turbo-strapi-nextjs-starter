import type { ReactNode, ComponentType, HTMLAttributes } from 'react'
import { memo } from 'react'
import cn from 'classnames'

interface ContainerProps {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	className?: string
}

const Container = memo(({ children, el: Component = 'div', className }: ContainerProps) => {
	return <Component className={cn(className, 'container')}>{children}</Component>
})

Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
