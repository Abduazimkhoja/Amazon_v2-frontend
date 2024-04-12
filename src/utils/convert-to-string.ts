export const convertToString = (
	separator: string,
	...args: (string | number)[]
) => {
	return args.join('')
}
