import type { BlockLogoCloudsGrid } from '@shared/services/strapi/interfaces/components/blocks/logo-clouds'
import { StrapiImg } from '@entities/strapi-image'
import { memo } from 'react'

const LogoCloudsGrid = memo(({ title, logos }: BlockLogoCloudsGrid) => {
	return (
		<div className='container'>
			<h2 className='text-center text-lg font-semibold text-gray-600'>{title}</h2>
			<div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
				{logos?.data.map((item) => (
					<div key={item.id} className='col-span-1 flex justify-center relative bg-gray-50 p-8'>
						<div className='h-12 relative w-full'>
							<StrapiImg img={item} className='object-contain' layout='fill' variant='thumbnail' />
						</div>
					</div>
				))}
			</div>
		</div>
	)
})

LogoCloudsGrid.displayName = 'LogoCloudsGrid'

export { LogoCloudsGrid }
