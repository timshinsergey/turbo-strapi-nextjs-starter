import { log } from 'logger'
import Link from 'next/link'
import { Alert, Container, Spinner } from 'ui'

export default function Home() {
	log('Hey! This is Home.')
	return (
		<Container>
			<h1>Store</h1>
			<Link href='/buttons'>
				<a>Buttons</a>
			</Link>
			<Link href='/icon-buttons'>
				<a>Icon Buttons</a>
			</Link>
			<Link href='/button-links'>
				<a>Button Links</a>
			</Link>

			<Alert variant='error'>
				error message <Spinner svgClassName='w-4 h-4 text-black' />
			</Alert>
			<div className='bg-lime-400'>awd</div>
		</Container>
	)
}
