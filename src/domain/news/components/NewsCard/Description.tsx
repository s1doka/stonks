import React from 'react'
import styled from 'styled-components'
import { truncateNewsDescription } from '../../services'

type Props = {
  children: string
}

const Text = styled.span`
  display: none;
  font-size: 12px;

  @media (min-width: 768px) {
    display: inline-flex;
  }
`

function Description({ children }: Props) {
  let text = truncateNewsDescription(children)

  return <Text>{text}</Text>
}

export default Description
