export const convertImageUrl = (
	image: string[] | string,
	index: number = 0
) => {
	if (Array.isArray(image)) return `${process.env.SERVER_URL}${image[index]}`
	else return `${process.env.SERVER_URL}${image}`
}
