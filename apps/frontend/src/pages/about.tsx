import { log } from 'logger'
import { Alert } from 'ui'

export default function Store() {
	log('Hey! This is About.')
	return (
		<div>
			<h1>About</h1>
			<Alert variant='success'>success message</Alert>
			<div className='bg-lime-400'>awd</div>
		</div>
	)
}
