import React from 'react'
import styled from 'styled-components'

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 1240px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default CardGrid
