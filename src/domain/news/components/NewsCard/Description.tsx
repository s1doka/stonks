import React from 'react'
import styled from 'styled-components'
import { truncateNewsDescription } from '../../services'

type Props = {
  className: string
  children: string
} & React.FunctionComponent

function Description({ className, children }: Props) {
  let text = truncateNewsDescription(children)

  return <span className={className}>{text}</span>
}

export default styled(Description)`
  display: none;
  font-size: 12px;

  @media (min-width: 768px) {
    display: inline-flex;
  }
`
