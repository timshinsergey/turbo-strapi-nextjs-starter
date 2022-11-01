import { log } from 'logger'
import Link from 'next/link'
import { Alert, Button, Container, Spinner } from 'ui'

export default function Buttons() {
	log('Hey! This is Buttons.')
	return (
		<Container>
			<h1>Buttons</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='base' size='extra-small'>
						Button
					</Button>
					<Button variant='base' size='small'>
						Button
					</Button>
					<Button variant='base'>Button</Button>
					<Button variant='base' size='large'>
						Button
					</Button>
					<Button variant='base' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='filled' size='extra-small'>
						Button
					</Button>
					<Button variant='filled' size='small'>
						Button
					</Button>
					<Button variant='filled'>Button</Button>
					<Button variant='filled' size='large'>
						Button
					</Button>
					<Button variant='filled' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='outlined' size='extra-small'>
						Button
					</Button>
					<Button variant='outlined' size='small'>
						Button
					</Button>
					<Button variant='outlined'>Button</Button>
					<Button variant='outlined' size='large'>
						Button
					</Button>
					<Button variant='outlined' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='base' color='secondary' size='extra-small'>
						Button
					</Button>
					<Button variant='base' color='secondary' size='small'>
						Button
					</Button>
					<Button variant='base' color='secondary'>
						Button
					</Button>
					<Button variant='base' color='secondary' size='large'>
						Button
					</Button>
					<Button variant='base' color='secondary' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='filled' color='secondary' size='extra-small'>
						Button
					</Button>
					<Button variant='filled' color='secondary' size='small'>
						Button
					</Button>
					<Button variant='filled' color='secondary'>
						Button
					</Button>
					<Button variant='filled' color='secondary' size='large'>
						Button
					</Button>
					<Button variant='filled' color='secondary' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='outlined' color='secondary' size='extra-small'>
						Button
					</Button>
					<Button variant='outlined' color='secondary' size='small'>
						Button
					</Button>
					<Button variant='outlined' color='secondary'>
						Button
					</Button>
					<Button variant='outlined' color='secondary' size='large'>
						Button
					</Button>
					<Button variant='outlined' color='secondary' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='base' color='error' size='extra-small'>
						Button
					</Button>
					<Button variant='base' color='error' size='small'>
						Button
					</Button>
					<Button variant='base' color='error'>
						Button
					</Button>
					<Button variant='base' color='error' size='large'>
						Button
					</Button>
					<Button variant='base' color='error' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='filled' color='error' size='extra-small'>
						Button
					</Button>
					<Button variant='filled' color='error' size='small'>
						Button
					</Button>
					<Button variant='filled' color='error'>
						Button
					</Button>
					<Button variant='filled' color='error' size='large'>
						Button
					</Button>
					<Button variant='filled' color='error' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='outlined' color='error' size='extra-small'>
						Button
					</Button>
					<Button variant='outlined' color='error' size='small'>
						Button
					</Button>
					<Button variant='outlined' color='error'>
						Button
					</Button>
					<Button variant='outlined' color='error' size='large'>
						Button
					</Button>
					<Button variant='outlined' color='error' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='base' color='success' size='extra-small'>
						Button
					</Button>
					<Button variant='base' color='success' size='small'>
						Button
					</Button>
					<Button variant='base' color='success'>
						Button
					</Button>
					<Button variant='base' color='success' size='large'>
						Button
					</Button>
					<Button variant='base' color='success' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='filled' color='success' size='extra-small'>
						Button
					</Button>
					<Button variant='filled' color='success' size='small'>
						Button
					</Button>
					<Button variant='filled' color='success'>
						Button
					</Button>
					<Button variant='filled' color='success' size='large'>
						Button
					</Button>
					<Button variant='filled' color='success' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='outlined' color='success' size='extra-small'>
						Button
					</Button>
					<Button variant='outlined' color='success' size='small'>
						Button
					</Button>
					<Button variant='outlined' color='success'>
						Button
					</Button>
					<Button variant='outlined' color='success' size='large'>
						Button
					</Button>
					<Button variant='outlined' color='success' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='base' color='warning' size='extra-small'>
						Button
					</Button>
					<Button variant='base' color='warning' size='small'>
						Button
					</Button>
					<Button variant='base' color='warning'>
						Button
					</Button>
					<Button variant='base' color='warning' size='large'>
						Button
					</Button>
					<Button variant='base' color='warning' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='filled' color='warning' size='extra-small'>
						Button
					</Button>
					<Button variant='filled' color='warning' size='small'>
						Button
					</Button>
					<Button variant='filled' color='warning'>
						Button
					</Button>
					<Button variant='filled' color='warning' size='large'>
						Button
					</Button>
					<Button variant='filled' color='warning' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button variant='outlined' color='warning' size='extra-small'>
						Button
					</Button>
					<Button variant='outlined' color='warning' size='small'>
						Button
					</Button>
					<Button variant='outlined' color='warning'>
						Button
					</Button>
					<Button variant='outlined' color='warning' size='large'>
						Button
					</Button>
					<Button variant='outlined' color='warning' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<Alert variant='error'>
				error message <Spinner svgClassName='w-4 h-4 text-black' />
			</Alert>
			<div className='bg-lime-400'>awd</div>
		</Container>
	)
}
