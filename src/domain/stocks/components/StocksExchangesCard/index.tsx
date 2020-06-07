import React from 'react'
import styled from 'styled-components'
import { StockExchange } from '../../support/types'
import Card from '../../../../components/Card'
import Link from 'next/link'
import Typography from '../../../../components/Typography'

type Props = {
  exchange: StockExchange
} & JSX.IntrinsicAttributes

const StockCard = styled(Card)`
  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--blue-1);

    :hover {
      text-decoration: underline;
    }
  }
`

function StocksExchangeCard({ exchange }: Props) {
  return (
    <StockCard>
      <Link href={`/stocks/${exchange.code}`}>
        <a>{exchange.name}</a>
      </Link>
      <Typography textSize={12.5}>{exchange.currency}</Typography>
    </StockCard>
  )
}

export default StocksExchangeCard
