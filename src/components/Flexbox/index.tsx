import React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
  children: React.ReactNode
  alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
}

const Flexbox = styled.div<Props>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`

export default Flexbox
