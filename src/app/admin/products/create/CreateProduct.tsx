'use client'
import {
	TypeCreateProductForm,
	TypeProductData
} from '@/services/product/product.types'
import { ICategory } from '@/types/category.interface'
import SelectCategory from '@/ui/selectCategory/SelectCategory'
import {
	Button,
	Divider,
	Flex,
	Grid,
	GridItem,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Textarea
} from '@chakra-ui/react'
import { FC } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

interface ICreateProductProp {
	categories: ICategory[]
}

const CreateProduct: FC<ICreateProductProp> = ({ categories }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		resetField,
		getValues,
		control
	} = useForm<TypeCreateProductForm>()

	const { fields, append } = useFieldArray({
		control,
		name: 'images'
	})

	const submit: SubmitHandler<TypeCreateProductForm> = data => {
		const { images, newImage, ...restData } = data
		const createProductData: TypeProductData = {
			...restData,
			images: images.map(({ url }) => url)
		}

		console.log(createProductData)
	}

	const setImageUrl = () => {
		const newImageUrl = getValues('newImage')
		if (!newImageUrl.trim()) return null
		append({ url: newImageUrl }) // Добавляем его в массив
		resetField('newImage') // Сбрасываем поле
	}

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Grid gap='4' templateColumns='repeat(2, 1fr)'>
				<GridItem colSpan={2}>
					<Input
						placeholder='Title'
						{...register('name', { required: true })}
						isInvalid={!!errors.name}
					/>
				</GridItem>
				<GridItem colSpan={2}>
					<Textarea
						placeholder='Desctiption'
						{...register('description', { required: true })}
						isInvalid={!!errors.description}
					/>
				</GridItem>
				<GridItem>
					<NumberInput isInvalid={!!errors.price}>
						<NumberInputField
							placeholder='Price'
							{...register('price', { required: true })}
						/>
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</GridItem>
				<GridItem>
					<SelectCategory
						isInvalid={!!errors.categoryId}
						categories={categories}
						{...register('categoryId', { required: true })}
					/>
				</GridItem>
			</Grid>

			<Divider marginBlock='4' borderWidth='2px' borderRadius='2' />

			<Flex gap='4'>
				<Input
					type='url'
					placeholder='Enter image url'
					{...register('newImage')}
					isInvalid={!!errors.newImage}
				/>

				<Button onClick={setImageUrl} type='button' colorScheme='blue'>
					Add
				</Button>
				{fields.map((field, index) => (
					<div key={field.id}>
						<Input
							type='url'
							placeholder='Enter image url'
							{...register(`images.${index}.url` as const, { required: true })}
							isInvalid={!!errors.images}
						/>
					</div>
				))}
			</Flex>

			<Divider marginBlock='4' borderWidth='2px' borderRadius='2' />

			<Button type='submit' colorScheme='orange'>
				Create
			</Button>
		</form>
	)
}

export default CreateProduct
// {
// 	"name": "",
// 	"description": "",
// 	"price": 0,
// 	"images": ["",""],
// 	"categoryId": 0
// }
