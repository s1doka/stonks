import React from 'react'
import styled from 'styled-components'
import { StockExchange } from '../../support/types'

import SectionTitle from '../../../../components/SectionTitle'
import { getStockExchanges } from '../../services'
import StocksExchangeCard from '../StocksExchangesCard'
import Link from 'next/link'
import NavLink from '../../../../components/NavLink'
import Flexbox from '../../../../components/Flexbox'

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
        let exchanges = data.slice(0, 6)

        setExchanges(exchanges)
      } catch (error) {
        setExchanges([])
      }
    }

    fetch()
  }, [])

  return (
    <div>
      <Flexbox alignItems='center' justifyContent='space-between'>
        <SectionTitle>Stock exchanges</SectionTitle>
        <Link href='/stocks'>
          <NavLink>See all</NavLink>
        </Link>
      </Flexbox>
      <Grid>
        {exchanges.map((exchange, index) => (
          <StocksExchangeCard key={index} exchange={exchange} />
        ))}
      </Grid>
    </div>
  )
}

export default StocksExchangeList
