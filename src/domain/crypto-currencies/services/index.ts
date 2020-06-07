import { get } from '../../../services/HttpService'

import {
  CryptoCurrencyCandle,
  CryptoCurrencyExchange,
  CryptoCurrencySymbol
} from '../support/types'
import CryptoCurrenciesException from '../support/exception'

export async function getCryptoExchanges(): Promise<CryptoCurrencyExchange[]> {
  try {
    return get('/api/crypto/exchange')
  } catch (error) {
    throw new CryptoCurrenciesException(`COULDN'T_GET_EXCHANGES`)
  }
}

export async function getCryptoSymbolsByExchange(
  exchange: CryptoCurrencyExchange
): Promise<CryptoCurrencySymbol[]> {
  try {
    return get('/api/crypto/symbol', { exchange })
  } catch (error) {
    throw new CryptoCurrenciesException(`COULDN'T_GET_EXCHANGE_SYMBOLS`)
  }
}

export async function getCryptoCandlesBySymbol(): Promise<
  CryptoCurrencyCandle[]
> {
  try {
    return get('/api/crypto/candle')
  } catch (error) {
    throw new CryptoCurrenciesException(`COULDN'T_GET_CANDLES`)
  }
}
