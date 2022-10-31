import { Alert } from '@shared/ui/alert'
import { log } from 'logger'

export default function Store() {
	log('Hey! This is About.')
	return (
		<div>
			<h1>About</h1>
			<Alert message='success message' variant='success' />
			<div className='bg-lime-400'>awd</div>
		</div>
	)
}
