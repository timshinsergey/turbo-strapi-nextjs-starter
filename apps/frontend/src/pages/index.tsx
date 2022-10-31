import { Alert } from '@shared/ui/alert'
import { log } from 'logger'
import Link from 'next/link'
import { Button } from 'ui'

export default function Store() {
	log('Hey! This is Home.')
	return (
		<div>
			<h1>Store</h1>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Alert message='success message' variant='success' />
			<Button />
			<div className='bg-lime-400'>awd</div>
		</div>
	)
}
