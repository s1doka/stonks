import React from 'react'
import styled from 'styled-components'
import { StockExchange } from '../../support/types'

import SectionTitle from '../../../../components/SectionTitle'
import { getStockExchanges } from '../../services'
import StocksExchangeCard from '../StocksExchangesCard'

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }
`

function StocksExchangeList() {
  let [exchanges, setExchanges] = React.useState<StockExchange[]>([])

  React.useEffect(() => {
    async function fetch() {
      try {
        let data = await getStockExchanges()
        let exchanges = data.slice(0, 5)

        setExchanges(exchanges)
      } catch (error) {
        setExchanges([])
      }
    }

    fetch()
  }, [])

  return (
    <div>
      <SectionTitle>Stock exchanges</SectionTitle>
      <Grid>
        {exchanges.map((exchange, index) => (
          <StocksExchangeCard key={index} exchange={exchange} />
        ))}
      </Grid>
    </div>
  )
}

export default StocksExchangeList
