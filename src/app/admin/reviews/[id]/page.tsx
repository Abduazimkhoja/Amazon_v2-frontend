import { ReviewService } from '@/services/review.service'
import { IPageIdParam, TypeParamId } from '@/types/page-params'
export const revalidate = 60

// export async function generateStaticParams() {
// 	try {
// 		const reviews = await ReviewService.getAll()

// 		const paths = reviews.data.map(review => ({
// 			params: { id: review.id }
// 		}))

// 		return paths
// 	} catch (error) {
// 		console.error(`❌Error`)
// 		// console.error('Error fetching reviews:', error)
// 		return []
// 	}
// }

async function getReview(params: TypeParamId) {
	if (!params.id) return
	const review = await ReviewService.getById(params?.id as string)

	return review
}

// export async function generateMetadata({
// 	params
// }: IPageIdParam): Promise<Metadata> {
// 	const review = await getReview(params)

// 	return {
// 		title: review?.user.name,
// 		description: review?.text,
// 		openGraph: {
// 			images: review?.user.avatarPath || [],
// 			description: review?.text
// 		}
// 	}
// }

export default async function ReviewPage({ params }: IPageIdParam) {
	const review = await getReview(params)
	console.log('❌length: ', review?.id)


async function getReview(params: TypeParamId) {
	const review = await ReviewService.getById(params?.id as string)

	return review.data
}

export default async function ReviewPage({ params }: IPageIdParam) {
	const review = await getReview(params)

	return <div>review</div>
}
