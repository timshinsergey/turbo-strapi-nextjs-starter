import { log } from 'logger'
import Link from 'next/link'
import { Alert, Container, Spinner } from 'ui'

export default function Home() {
	log('Hey! This is Home.')
	return (
		<Container>
			<h1>Store</h1>
			<div className='grid grid-flow-col justify-start gap-3'>
				<Link href='/buttons'>
					<a>Buttons</a>
				</Link>
				<Link href='/icon-buttons'>
					<a>Icon Buttons</a>
				</Link>
				<Link href='/button-links'>
					<a>Button Links</a>
				</Link>
			</div>
		</Container>
	)
}
