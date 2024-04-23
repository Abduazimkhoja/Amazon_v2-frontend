import Image from 'next/image'
import { FC, useState } from 'react'
import cn from 'clsx'

interface IProductGallery {
	images: string[]
}

const ProductGallery: FC<IProductGallery> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div>
			<Image
				src={images[activeIndex]}
				alt=''
				width={500}
				height={500}
				className='rounded-lg overflow-hidden'
				priority
				draggable={false}
			/>
			<div
				className='bt-6'
				style={{ width: '500px', overflowX: 'auto', whiteSpace: 'nowrap' }}
			>
				{images.map((image, index) => {
					return (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={cn(
								'duration-300 hover:shadow-md mr-5 last:mr-0 border-b-2 border-solid transition-all rounded-lg overflow-hidden inline-block',
								{
									'shadow-md bg-primary': index === activeIndex,
									'border-transparent': index !== activeIndex
								}
							)}
						>
							<Image
								draggable={false}
								src={image}
								alt=''
								width={100}
								height={100}
								priority
							/>
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default ProductGallery
