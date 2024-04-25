'use client'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import cn from 'clsx'
import type { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition'
import { CSSTransition } from '../CSSTransitionGroup'
import CarouselNavigation from './CarouselNavigation'
import { ICarouselItem } from './carouse.interface'

import Link from 'next/link'
import styles from './Carousel.module.scss'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]

	const CSSTransitionClass: CSSTransitionClassNames = {
		enter: styles['item-enter'],
		enterActive: styles['item-enter-active'],
		exit: styles['item-exit'],
		exitActive: styles['item-exit-active']
	}

	const GetLink = ({ push = '/explorer' }) => {
		const text = push ? 'Read more' : 'Browse products'
		return (
			<Link href={push} className='btn btn-white'>
				{text}
			</Link>
		)
	}
	const backgroundImageStyle = () => {
		if (selectedItem?.image)
			return { backgroundImage: `url(${selectedItem.image})` }
		return {}
	}

	return (
		<section className={cn(className, 'relative')}>
			<CarouselNavigation />
			<TransitionGroup className='relative h-56'>
				<CSSTransition
					key={selectedItem?.title}
					timeout={500}
					classNames={CSSTransitionClass}
					unmountOnExit
					mountOnEnter
				>
					<div className={styles.item} style={backgroundImageStyle()}>
						<h2>{selectedItem?.title}</h2>
						<p>{selectedItem?.description}</p>
						<GetLink push={selectedItem?.link} />
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}

export default Carousel
