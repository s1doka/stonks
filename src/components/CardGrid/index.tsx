import React from 'react'
import styled from 'styled-components'

function CardGrid({ className, children }) {
  return <div className={className}>{children}</div>
}

export default styled(CardGrid)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 1240px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
