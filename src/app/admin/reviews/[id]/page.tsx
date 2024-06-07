import { ReviewService } from '@/services/review.service'
import { IPageIdParam, TypeParamId } from '@/types/page-params'

async function getReview(params: TypeParamId) {
	const review = await ReviewService.getById(params?.id as string)

	return review.data
}

export default async function ReviewPage({ params }: IPageIdParam) {
	const review = await getReview(params)

	return <div>review</div>
}
