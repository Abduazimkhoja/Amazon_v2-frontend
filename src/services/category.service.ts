import { instance } from '@/api/api.interceptor'
import { ProductService } from '@/services/product/product.service'
import { ICategory, ICategoryProduct } from '@/types/category.interface'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getCategoryProducts() {
		const categories = await instance<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})

		let categoryProducts: ICategoryProduct[] = []

		const promises = categories.data.map(async ({ slug, name }) => {
			const { data: productByCategory } =
				await ProductService.getByCategory(slug)
			categoryProducts.push({ title: name, products: productByCategory })
		})

		// Wait for all promises to complete
		await Promise.all(promises)

		console.log('category', categoryProducts)

		return categoryProducts
	},

	async create() {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	}
}
