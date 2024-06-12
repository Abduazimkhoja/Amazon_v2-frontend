import { FC } from 'react'
import CreateProduct from './CreateProduct'
import { CategoryService } from '@/services/category.service'

const getAllCategories = async () => {
	return await CategoryService.getAll()
}

const Page: FC = async () => {
	const { data: categories } = await getAllCategories()
	return <CreateProduct categories={categories}/>
}

export default Page
