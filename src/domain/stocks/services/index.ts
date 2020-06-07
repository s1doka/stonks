import { get } from '../../../services/HttpService'
import { StockExchange } from '../support/types'
import { FetchStockExchangesCantBeDoneException } from '../support/exception'

export async function getStockExchanges(): Promise<StockExchange[]> {
  try {
    return get('/api/stocks/exchange')
  } catch (error) {
    throw new FetchStockExchangesCantBeDoneException(`COULDN'T_GET_STOCK_EXCHANGES`)
  }
}
