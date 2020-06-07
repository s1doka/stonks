import React from 'react'
import styled from 'styled-components'

type Props = {
  textSize?: 16 | 14 | 12.5
  fontColor?: string
  children: React.ReactNode
}

const Text = styled.span`
  font-size: ${({ textSize }) => textSize * (8 / 9)}px;
  color: ${({ fontColor }) => fontColor};
`

function Typography({
  children,
  textSize = 16,
  fontColor = 'var(--gray-3)'
}: Props) {
  return (
    <Text textSize={textSize} fontColor={fontColor}>
      {children}
    </Text>
  )
}

export default Typography
