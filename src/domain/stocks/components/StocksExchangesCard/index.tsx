import React from 'react'
import { StockExchange } from '../../support/types'
import Card from '../../../../components/Card'
import Link from 'next/link'
import Typography from '../../../../components/Typography'

type Props = {
  exchange: StockExchange
} & JSX.IntrinsicAttributes

function StocksExchangeCard({ exchange }: Props) {
  return (
    <Card>
      <Link href={`/stocks/${exchange.code}`}>
        <a>{exchange.name}</a>
      </Link>
      <Typography textSize={12.5}>{exchange.currency}</Typography>
    </Card>
  )
}

export default StocksExchangeCard
