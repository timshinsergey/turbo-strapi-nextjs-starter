import { log } from 'logger'
import Link from 'next/link'
import { Alert, Button, Container, Spinner } from 'ui'

const Page = () => {
	log('Hey! This is Buttons.')

	const showSuccessToast = async () => {
		const { showToast } = await import('ui')
		showToast({ children: 'Sucess message', variant: 'success' })
	}

	const showErrorToast = async () => {
		const { showToast } = await import('ui')
		showToast({ children: 'Error message', variant: 'error' })
	}

	const showWarningToast = async () => {
		const { showToast } = await import('ui')
		showToast({ children: 'Warning message', variant: 'warning' })
	}

	const showInfoToast = async () => {
		const { showToast } = await import('ui')
		showToast({ children: 'Info message', variant: 'info' })
	}

	const showToast = async () => {
		const { showToast } = await import('ui')
		showToast({ children: 'Default message' })
	}

	return (
		<Container>
			<h1>Buttons</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showInfoToast} variant='base' size='extra-small'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='base' size='small'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='base'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='base' size='large'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='base' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showInfoToast} round variant='filled' size='extra-small'>
						Button
					</Button>
					<Button onClick={showInfoToast} round variant='filled' size='small'>
						Button
					</Button>
					<Button onClick={showInfoToast} round variant='filled'>
						Button
					</Button>
					<Button onClick={showInfoToast} round variant='filled' size='large'>
						Button
					</Button>
					<Button onClick={showInfoToast} round variant='filled' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showInfoToast} variant='outlined' size='extra-small'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='outlined' size='small'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='outlined'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='outlined' size='large'>
						Button
					</Button>
					<Button onClick={showInfoToast} variant='outlined' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showToast} variant='base' color='secondary' size='extra-small'>
						Button
					</Button>
					<Button onClick={showToast} variant='base' color='secondary' size='small'>
						Button
					</Button>
					<Button onClick={showToast} variant='base' color='secondary'>
						Button
					</Button>
					<Button onClick={showToast} variant='base' color='secondary' size='large'>
						Button
					</Button>
					<Button onClick={showToast} variant='base' color='secondary' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showToast} variant='filled' color='secondary' size='extra-small'>
						Button
					</Button>
					<Button onClick={showToast} variant='filled' color='secondary' size='small'>
						Button
					</Button>
					<Button onClick={showToast} variant='filled' color='secondary'>
						Button
					</Button>
					<Button onClick={showToast} variant='filled' color='secondary' size='large'>
						Button
					</Button>
					<Button onClick={showToast} variant='filled' color='secondary' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showToast} variant='outlined' color='secondary' size='extra-small'>
						Button
					</Button>
					<Button onClick={showToast} variant='outlined' color='secondary' size='small'>
						Button
					</Button>
					<Button onClick={showToast} variant='outlined' color='secondary'>
						Button
					</Button>
					<Button onClick={showToast} variant='outlined' color='secondary' size='large'>
						Button
					</Button>
					<Button onClick={showToast} variant='outlined' color='secondary' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showErrorToast} variant='base' color='error' size='extra-small'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='base' color='error' size='small'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='base' color='error'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='base' color='error' size='large'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='base' color='error' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showErrorToast} variant='filled' color='error' size='extra-small'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='filled' color='error' size='small'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='filled' color='error'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='filled' color='error' size='large'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='filled' color='error' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showErrorToast} variant='outlined' color='error' size='extra-small'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='outlined' color='error' size='small'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='outlined' color='error'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='outlined' color='error' size='large'>
						Button
					</Button>
					<Button onClick={showErrorToast} variant='outlined' color='error' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showSuccessToast} variant='base' color='success' size='extra-small'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='base' color='success' size='small'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='base' color='success'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='base' color='success' size='large'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='base' color='success' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showSuccessToast} variant='filled' color='success' size='extra-small'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='filled' color='success' size='small'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='filled' color='success'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='filled' color='success' size='large'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='filled' color='success' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showSuccessToast} variant='outlined' color='success' size='extra-small'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='outlined' color='success' size='small'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='outlined' color='success'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='outlined' color='success' size='large'>
						Button
					</Button>
					<Button onClick={showSuccessToast} variant='outlined' color='success' size='extra-large'>
						Button
					</Button>
				</div>
			</div>

			<div className='grid gap-2'>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showWarningToast} variant='base' color='warning' size='extra-small'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='base' color='warning' size='small'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='base' color='warning'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='base' color='warning' size='large'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='base' color='warning' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showWarningToast} variant='filled' color='warning' size='extra-small'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='filled' color='warning' size='small'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='filled' color='warning'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='filled' color='warning' size='large'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='filled' color='warning' size='extra-large'>
						Button
					</Button>
				</div>
				<div className='grid grid-flow-col gap-2 justify-start items-end'>
					<Button onClick={showWarningToast} variant='outlined' color='warning' size='extra-small'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='outlined' color='warning' size='small'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='outlined' color='warning'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='outlined' color='warning' size='large'>
						Button
					</Button>
					<Button onClick={showWarningToast} variant='outlined' color='warning' size='extra-large'>
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

export default Page
