import React from 'react'

import { render } from '@testing-library/react'

import SectionTitle from '../../src/components/SectionTitle'

describe('<SectionTitle />', () => {
  test('snapshot testing', async () => {
    let { asFragment } = render(<SectionTitle>Title</SectionTitle>)

    expect(asFragment()).toMatchSnapshot()
  })
})
