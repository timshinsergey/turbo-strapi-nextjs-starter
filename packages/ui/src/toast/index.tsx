import { memo } from 'react'
import { Toaster, ToasterProps } from 'react-hot-toast'

interface ToastProps extends ToasterProps {}

const Toast = memo(({ ...props }: ToastProps) => {
	return (
		<Toaster
			position='bottom-left'
			reverseOrder={false}
			gutter={8}
			toastOptions={{ duration: 5000 }}
			{...props}
		/>
	)
})

Toast.displayName = 'Toast'

// If you leave memo, the i18n texts
// will not be displayed when switching languages
export { Toast }
export type { ToastProps }
