import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import NavLink from '../NavLink'

function MobileMenuNavigation({ className }) {
  return (
    <div className={className}>
      <nav>
        <Link href='/'>
          <NavLink>News</NavLink>
        </Link>
        <Link href='/stocks'>
          <NavLink>Stocks</NavLink>
        </Link>
        <Link href='/crypto'>
          <NavLink>Cryptocurrencies</NavLink>
        </Link>
        <Link href='/forex'>
          <NavLink>Forex</NavLink>
        </Link>
      </nav>
    </div>
  )
}

export default styled(MobileMenuNavigation)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2000;
  height: 65px;
  background-color: var(--white);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  @media (min-width: 1140px) {
    display: none;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
