import type { ReactNode } from 'react'
import type { DefaultButtonProps } from '../default'
import { memo } from 'react'
import { DefaultButton } from '../default'

interface ButtonLinkProps extends DefaultButtonProps<'a'> {
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const ButtonLink = memo(({ children, rightIcon, leftIcon, ...props }: ButtonLinkProps) => {
	return (
		<DefaultButton el='a' {...props}>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}
		</DefaultButton>
	)
})

ButtonLink.displayName = 'ButtonLink'

export { ButtonLink }
export type { ButtonLinkProps }
