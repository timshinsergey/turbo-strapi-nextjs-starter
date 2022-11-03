import type { ReactNode } from 'react'
import type { DefaultButtonProps } from '../default'
import { forwardRef, memo } from 'react'
import { Spinner } from '../../spinner'
import { DefaultButton } from '../default'

interface ButtonProps extends DefaultButtonProps<'button'> {
	loading?: boolean
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		({ children, loading, disabled, rightIcon, leftIcon, ...props }, ref) => {
			return (
				<DefaultButton
					ref={ref}
					disabled={loading || disabled}
					tabIndex={loading || disabled ? -1 : 0}
					type='button'
					{...props}
				>
					{loading && <Spinner svgClassName='w-4 h-4' />}
					{leftIcon && !loading && leftIcon}
					{children}
					{rightIcon && !loading && rightIcon}
				</DefaultButton>
			)
		}
	)
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
