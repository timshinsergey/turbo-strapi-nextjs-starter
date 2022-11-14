import '@app/global.css'
import 'ui/styles.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Toast } from 'ui'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Component {...pageProps} />
			<Toast />
		</>
	)
}

export default MyApp
