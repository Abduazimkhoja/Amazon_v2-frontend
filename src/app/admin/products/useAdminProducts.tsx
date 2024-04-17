import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin product'],
		queryFn: () => ProductService.getAll()
	})
}
