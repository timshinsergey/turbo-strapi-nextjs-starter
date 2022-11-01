import { log } from 'logger'
import Link from 'next/link'
import { Alert } from 'ui'

export default function Store() {
	log('Hey! This is Home.')
	return (
		<div>
			<h1>Store</h1>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Alert variant='error'>error message</Alert>
			<div className='bg-lime-400'>awd</div>
		</div>
	)
}
