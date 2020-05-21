import React from 'react'
import { render } from '@testing-library/react'

import Name from './index'

describe('<Name />', () => {
  test('it should diplay the username correctly', () => {
    let { getByText } = render(<Name>Sidoka</Name>)
    let username = getByText(/Sidoka/)

    expect(username).toBeVisible()
  })
})
