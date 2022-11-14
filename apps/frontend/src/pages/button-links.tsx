import { log } from 'logger'
import Link from 'next/link'
import { Alert, ButtonLink, Container, Icon, Spinner } from 'ui'

const Page = () => {
	log('Hey! This is Buttons.')
	return (
		<Container>
			<h1>ButtonLinks</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink
						variant='base'
						size='extra-small'
						leftIcon={<Icon size='small' name='chevron-left' />}
					>
						Button
					</ButtonLink>
					<ButtonLink variant='base' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base'>Button</ButtonLink>
					<ButtonLink variant='base' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='filled' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled'>Button</ButtonLink>
					<ButtonLink variant='filled' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='outlined' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined'>Button</ButtonLink>
					<ButtonLink variant='outlined' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' size='extra-large'>
						Button
					</ButtonLink>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='base' color='secondary' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='secondary' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='secondary'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='secondary' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='secondary' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='filled' color='secondary' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='secondary' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='secondary'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='secondary' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='secondary' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='outlined' color='secondary' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='secondary' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='secondary'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='secondary' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='secondary' size='extra-large'>
						Button
					</ButtonLink>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='base' color='error' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='error' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='error'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='error' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='error' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='filled' color='error' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='error' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='error'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='error' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='error' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='outlined' color='error' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='error' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='error'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='error' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='error' size='extra-large'>
						Button
					</ButtonLink>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='base' color='success' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='success' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='success'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='success' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='success' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='filled' color='success' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='success' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='success'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='success' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='success' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='outlined' color='success' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='success' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='success'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='success' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='success' size='extra-large'>
						Button
					</ButtonLink>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='base' color='warning' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='warning' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='warning'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='warning' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='base' color='warning' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='filled' color='warning' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='warning' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='warning'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='warning' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='filled' color='warning' size='extra-large'>
						Button
					</ButtonLink>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<ButtonLink variant='outlined' color='warning' size='extra-small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='warning' size='small'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='warning'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='warning' size='large'>
						Button
					</ButtonLink>
					<ButtonLink variant='outlined' color='warning' size='extra-large'>
						Button
					</ButtonLink>
				</div>
			</div>

			<Alert variant='error'>
				error message <Spinner svgClassName='w-4 h-4 text-black' />
			</Alert>
			<div className='bg-lime-400'>awd</div>
		</Container>
	)
}

export default Page
