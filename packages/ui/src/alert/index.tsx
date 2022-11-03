import type { HTMLAttributes } from 'react'
import { memo } from 'react'
import cn from 'classnames'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
}

const Alert = memo(({ className, children, variant = 'default', ...props }: AlertProps) => {
	return (
		<div
			role='alert'
			className={cn(className, 'p-4 text-sm rounded-lg', {
				['bg-white text-black dark:bg-black dark:text-white border']: variant === 'default',
				['text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800']:
					variant === 'success',
				['text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800']: variant === 'error',
				['text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800']:
					variant === 'warning',
				['text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800']: variant === 'info',
			})}
			{...props}
		>
			{children}
		</div>
	)
})

Alert.displayName = 'Alert'

export { Alert }
export type { AlertProps }
