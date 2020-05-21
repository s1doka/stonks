import React from 'react'
import { getCryptoSymbolsByExchange } from '../../services'
import { CryptoCurrencySymbol } from '../../support/types'

function CryptoExchangeSymbols({ exchange = 'KRAKEN' }) {
  let [symbols, setSymbols] = React.useState<CryptoCurrencySymbol[]>([])

  React.useEffect(() => {
    async function fetch() {
      try {
        let data = await getCryptoSymbolsByExchange(exchange)
        setSymbols(data)
      } catch (error) {
        setSymbols([])
      }
    }

    fetch()
  }, [])

  return (
    <div>
      {symbols.map(symbol => (
        <div>
          <p>{symbol.displaySymbol}</p>
          <span>{symbol.description}</span>
        </div>
      ))}
    </div>
  )
}

export default CryptoExchangeSymbols
