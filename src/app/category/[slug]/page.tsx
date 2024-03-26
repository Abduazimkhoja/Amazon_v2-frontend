import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'
import { TypeParamSLug, iPageSlugParam } from '@/types/page-params'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return paths
}

export async function generateMetadata({
	params
}: iPageSlugParam): Promise<Metadata> {
	const { category, products } = await getProducts(params)

	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0].images,
			description: `Random description about ${category.name}`
		}
	}
}

async function getProducts(params: TypeParamSLug) {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)
	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)

	return { products, category }
}

export default async function CategoryPage({ params }: iPageSlugParam) {
	const { products, category } = await getProducts(params)

	return (
		<Layout>
			<Catalog products={products || []} title={category.name} />
		</Layout>
	)
}
