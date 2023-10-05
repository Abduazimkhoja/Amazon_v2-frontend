import { instance } from '@/api/api.interceptor'

const PAYMENT = 'payment'

export const PaymentService = {
	async create(amount: number) {
		return instance.post<IPaymentResponse>(PAYMENT, { amount })
	}
}
