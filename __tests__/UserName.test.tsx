import React from 'react'
import { render } from '@testing-library/react'

import Name from '../src/domain/User/UserName'

describe('<Name />', () => {
  test('it should display the username correctly', () => {
    let { getByText } = render(<Name>Sidoka</Name>)
    let username = getByText(/Sidoka/)

    expect(username).toBeVisible()
  })
})
