import { log } from 'logger'
import Link from 'next/link'
import { Alert, Container, Icon, IconButton, Spinner } from 'ui'

export default function IconButtons() {
	log('Hey! This is Icon Buttons!')
	return (
		<Container>
			<h1>Icon Buttons</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>

			<div className='grid gap-2 grid-cols-2'>
				<div className='grid gap-2'>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='base' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='filled' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='outlined' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
				</div>

				<div className='grid gap-2'>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='base' color='secondary' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='secondary' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='secondary'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='secondary' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='secondary' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='filled' color='secondary' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='secondary' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='secondary'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='secondary' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='secondary' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='outlined' color='secondary' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='secondary' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='secondary'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='secondary' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='secondary' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
				</div>

				<div className='grid gap-2'>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='base' color='error' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='error' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='error'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='error' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='error' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='filled' color='error' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='error' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='error'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='error' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='error' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='outlined' color='error' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='error' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='error'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='error' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='error' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
				</div>

				<div className='grid gap-2'>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='base' color='success' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='success' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='success'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='success' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='success' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='filled' color='success' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='success' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='success'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='success' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='success' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='outlined' color='success' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='success' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='success'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='success' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='success' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
				</div>

				<div className='grid gap-2'>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='base' color='warning' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='warning' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='warning'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='warning' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='base' color='warning' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='filled' color='warning' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='warning' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='warning'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='warning' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='filled' color='warning' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
					<div className='grid grid-flow-col gap-2 justify-start items-end'>
						<IconButton variant='outlined' color='warning' size='extra-small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='warning' size='small' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='warning'>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='warning' size='large' loading>
							<Icon name='chevron-left' />
						</IconButton>
						<IconButton variant='outlined' color='warning' size='extra-large' loading>
							<Icon name='chevron-left' />
						</IconButton>
					</div>
				</div>
			</div>

			<Alert variant='error'>
				error message <Spinner />
			</Alert>
			<div className='bg-lime-400'>awd</div>
		</Container>
	)
}
