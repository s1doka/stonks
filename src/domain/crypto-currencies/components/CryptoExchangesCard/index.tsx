import React from 'react'
import Card from '../../../../components/Card'
import Link from 'next/link'
import { CryptoCurrencyExchange } from '../../support/types'

type Props = {
  exchange: CryptoCurrencyExchange
}

function CryptoExchangesCard({ exchange, ...props }: Props) {
  return (
    <Card {...props}>
      <Link href={`/stocks/${exchange}`}>
        <a>{exchange}</a>
      </Link>
    </Card>
  )
}

export default CryptoExchangesCard
