import React from 'react'
import styled from 'styled-components'

const NavLink = styled.a`
  text-decoration: none;
  color: var(--blue-2);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  :visited {
    color: var(--blue-2);
  }
`

export default NavLink
