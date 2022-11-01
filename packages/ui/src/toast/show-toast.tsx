import type { AlertProps } from '../alert'
import toast from 'react-hot-toast'
import { Alert } from '../alert'

const showToast = ({ children, ...props }: AlertProps) =>
	toast.custom((t) => (
		<Alert
			aria-live='assertive'
			aria-atomic='true'
			className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
			{...props}
		>
			{children}
		</Alert>
	))

export { showToast }
