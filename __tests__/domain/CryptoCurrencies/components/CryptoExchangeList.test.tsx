import React from 'react'

import { render } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'
import { mocked } from 'ts-jest/utils'

import CryptoExchangeList from '../../../../src/domain/crypto-currencies/components/CryptoExchangeList'
import { getCryptoExchanges } from '../../../../src/domain/crypto-currencies/services'

jest.mock('../../../../src/domain/crypto-currencies/services')

describe('<CryptoExchangeList />', () => {
  test('it should display 4 crypto exchanges', async () => {
    mocked(getCryptoExchanges).mockReturnValueOnce(
      Promise.resolve(['KRAKEN', 'HITBTC', 'COINBASE', 'GEMINI'])
    )

    let { getAllByTestId } = render(<CryptoExchangeList />)

    await waitFor(() => {})

    let exchanges = getAllByTestId(/^exchange/)

    expect(exchanges).toHaveLength(4)
  })
})
