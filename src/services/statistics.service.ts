import { instance } from '@/api/api.interceptor'

const STATISTICS = 'statistics'

export type TypeStatsResponse = {
	name: string
	value: number
}

export const StatisticService = {
	async getMain() {
		return instance<TypeStatsResponse[]>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
