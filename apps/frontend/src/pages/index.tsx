import { log } from 'logger'
import Link from 'next/link'
import { Alert, Container, Spinner } from 'ui'

export default function Store() {
	log('Hey! This is Home.')
	return (
		<Container>
			<h1>Store</h1>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Alert variant='error'>
				error message <Spinner svgClassName='w-4 h-4 text-black' />
			</Alert>
			<div className='bg-lime-400'>awd</div>
		</Container>
	)
}
