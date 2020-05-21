import React from 'react'
import BasicLayout from 'src/layout/BasicLayout'
import CryptoExchangeList from 'src/domain/crypto-currencies/components/CryptoExchangeList'
import CryptoExchangeSymbols from 'src/domain/crypto-currencies/components/CryptoExchangeSymbols'

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <CryptoExchangeList />
      {/*<CryptoExchangeSymbols />*/}
    </div>
  )
}

Homepage.layout = BasicLayout

export default Homepage
