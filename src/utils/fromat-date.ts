import { convertToString } from './convert-to-string'

export function formatDate(dateString: string) {
	const date = new Date(dateString)

	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth()).padStart(2, '0')

	const year = date.getFullYear()

	return convertToString('.', day, month, year)
}
