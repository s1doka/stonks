import React from 'react'
import styled from 'styled-components'
import { useFetchCryptoExchange } from '../../hooks/useFetchCryptoExchange'
import SectionTitle from '../../../../components/SectionTitle'
import Link from 'next/link'
import NavLink from '../../../../components/NavLink'
import Flexbox from '../../../../components/Flexbox'
import CryptoExchangesCard from '../CryptoExchangesCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

function CryptoExchangeList() {
  let {
    state: { exchanges },
    getExchanges
  } = useFetchCryptoExchange(6)

  React.useEffect(() => {
    const fetch = async () => getExchanges()

    fetch()
  }, [])

  return (
    <div>
      <Flexbox alignItems='center' justifyContent='space-between'>
        <SectionTitle>Crypto exchanges</SectionTitle>
        <Link href='/crypto'>
          <NavLink>See all</NavLink>
        </Link>
      </Flexbox>
      <Grid>
        {exchanges.map((exchange, index) => (
          <CryptoExchangesCard
            exchange={exchange}
            key={index}
            data-testid={`exchange-${index}`}
          />
        ))}
      </Grid>
    </div>
  )
}

export default CryptoExchangeList
