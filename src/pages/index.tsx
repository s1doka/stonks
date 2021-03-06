import React from 'react'
import styled from 'styled-components'

import BasicLayout from '../layout/BasicLayout'
import NewsList from '../domain/news/components/NewsList'
import StocksExchangeList from '../domain/stocks/components/StocksExchangesList'
import CryptoExchangeList from '../domain/crypto-currencies/components/CryptoExchangeList'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }
`

function Homepage() {
  return (
    <div>
      <Grid>
        <NewsList />
        <div>
          <StocksExchangeList />
          <CryptoExchangeList />
        </div>
      </Grid>
    </div>
  )
}

Homepage.layout = BasicLayout

export default Homepage
