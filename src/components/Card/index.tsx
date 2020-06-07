import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 3px 19px -9px rgba(25, 39, 80, 0.65);

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--blue-1);

    :hover {
      text-decoration: underline;
    }
  }
`

export default Card
