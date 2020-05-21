export type CryptoCurrencyExchange = string

export type CryptoCurrencySymbol = {
  description: string
  displaySymbol: string
  symbol: string
}

export type CryptoCurrencyCandle = {
  /*
   * List of open prices for returned candles.
   * */
  o: number[]
  /*
   * List of high prices for returned candles.
   * */
  h: number[]
  /*
   * List of low prices for returned candles.
   * */
  l: number[]
  /*
   * List of close prices for returned candles.
   * */
  c: number[]
  /*
   * List of volume data for returned candles.
   * */
  v: number[]
  /*
   * List of timestamp for returned candles.
   * */
  t: number[]
  /*
   * Status of the response. This field can either be ok or no_data.
   * */
  s: 'ok' | 'no_data'
}
