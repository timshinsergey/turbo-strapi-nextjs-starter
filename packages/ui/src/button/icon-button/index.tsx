import type { ComponentProps } from 'react'
import { forwardRef, memo } from 'react'
import cn from 'classnames'
import { Spinner } from '../../spinner'

interface IconButtonProps extends ComponentProps<'button'> {
	variant?: 'base' | 'filled' | 'outlined' | 'custom'
	color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'custom'
	size?: 'small' | 'base' | 'large' | 'custom'
	loading?: boolean
}

const IconButton = memo(
	forwardRef<HTMLButtonElement, IconButtonProps>(
		(
			{
				variant = 'base',
				size = 'base',
				color = 'primary',
				className,
				disabled,
				children,
				loading,
				...props
			},
			ref
		) => {
			return (
				<button
					ref={ref}
					disabled={loading || disabled}
					tabIndex={loading || disabled ? -1 : 0}
					type='button'
					className={cn(
						className,
						'grid relative rounded-lg focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-25',
						{
							['text-white']: variant === 'filled',
							['border [&:not(:disabled)]:hover:text-white [&:not(:disabled)]:dark:hover:text-white']:
								variant === 'outlined',

							['text-blue-700 [&:not(:disabled)]:hover:bg-blue-100 ']:
								color === 'primary' && variant === 'base',
							['bg-blue-700 [&:not(:disabled)]:hover:bg-blue-800 focus:ring-blue-300 [&:not(:disabled)]:dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800']:
								color === 'primary' && variant === 'filled',
							['text-blue-700 border-blue-700 [&:not(:disabled)]:hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 [&:not(:disabled)]:dark:hover:bg-blue-600 dark:focus:ring-blue-800']:
								color === 'primary' && variant === 'outlined',

							['text-purple-700 [&:not(:disabled)]:hover:bg-purple-100']:
								color === 'secondary' && variant === 'base',
							['bg-purple-700 [&:not(:disabled)]:hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 [&:not(:disabled)]:dark:hover:bg-purple-700 dark:focus:ring-purple-900']:
								color === 'secondary' && variant === 'filled',
							['text-purple-700 border-purple-700 [&:not(:disabled)]:hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 [&:not(:disabled)]:dark:hover:bg-purple-500 dark:focus:ring-purple-900']:
								color === 'secondary' && variant === 'outlined',

							['text-yellow-400 [&:not(:disabled)]:hover:bg-yellow-100']:
								color === 'warning' && variant === 'base',
							['bg-yellow-400 [&:not(:disabled)]:hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900']:
								color === 'warning' && variant === 'filled',
							['text-yellow-400 border-yellow-400 [&:not(:disabled)]:hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 [&:not(:disabled)]:dark:hover:bg-yellow-400 dark:focus:ring-yellow-900']:
								color === 'warning' && variant === 'outlined',

							['text-green-700 [&:not(:disabled)]:hover:bg-green-100']:
								color === 'success' && variant === 'base',
							['bg-green-700 [&:not(:disabled)]:hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 [&:not(:disabled)]:dark:hover:bg-green-700 dark:focus:ring-green-800']:
								color === 'success' && variant === 'filled',
							['text-green-700 border-green-700 [&:not(:disabled)]:hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 [&:not(:disabled)]:dark:hover:bg-green-600 dark:focus:ring-green-800']:
								color === 'success' && variant === 'outlined',

							['text-red-700 [&:not(:disabled)]:hover:bg-red-100']:
								color === 'error' && variant === 'base',
							['bg-red-700 [&:not(:disabled)]:hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 [&:not(:disabled)]:dark:hover:bg-red-700 dark:focus:ring-red-900']:
								color === 'error' && variant === 'filled',
							['text-red-700 border-red-700 [&:not(:disabled)]:hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 [&:not(:disabled)]:dark:hover:bg-red-600 dark:focus:ring-red-900']:
								color === 'error' && variant === 'outlined',

							['p-2']: size === 'small',
							['p-2.5']: size === 'base',
							['p-3']: size === 'large',
						}
					)}
					{...props}
				>
					{loading ? <Spinner /> : children}
				</button>
			)
		}
	)
)

IconButton.displayName = 'IconButton'

export { IconButton }
export type { IconButtonProps }
