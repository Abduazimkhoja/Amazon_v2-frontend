import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Users from './Users'

export const metadata: Metadata = {
	title: 'Users',
	...NO_INDEX_PAGE
}

export default function ReviewPage() {
	return <Users />
}
