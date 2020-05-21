import React from 'react'
import { useFetchCryptoExchange } from '../../hooks/useFetchCryptoExchange'

function CryptoExchangeList() {
  let {
    state: { exchanges },
    getExchanges
  } = useFetchCryptoExchange()

  React.useEffect(() => {
    const fetch = async () => getExchanges()

    fetch()
  }, [])

  return (
    <div>
      <div>
        {exchanges.map((exchange, index) => (
          <p key={exchange} data-testid={`exchange-${index}`}>
            {exchange}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CryptoExchangeList
