export const convertImageUrl = (images: string[]) => {
  return `${process.env.SERVER_URL}${images[0]}`
}
