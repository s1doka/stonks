export type StockExchange = {
  name: string
  code: string
  currency: string
}

export type StockSymbol = {
  description: string
  displaySymbol: string
  symbol: string
}

export type Company = {
  country: string
  currency: string
  exchange: string
  name: string
  ticker: string
  ipo: string
  marketCapitalization: number
  shareOutstanding: number
  logo: string
  phone: string
  weburl: string
  finnhubIndustry: string
}