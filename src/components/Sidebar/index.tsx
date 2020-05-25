import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  className: string
}

const Stonks = styled.a`
  margin: 32px 0 60px 0;
  font-weight: 700;
  font-size: 24px;
  color: var(--blue-1);
  cursor: pointer;
`

function Sidebar({ className }: Props) {
  return (
    <aside className={className}>
      <Link href='/'>
        <Stonks>stonks</Stonks>
      </Link>
      <nav>
        <Link href='/'>
          <a>News</a>
        </Link>
        <Link href='/stocks'>
          <a>Stocks</a>
        </Link>
        <Link href='/crypto'>
          <a>Cryptocurrencies</a>
        </Link>
        <Link href='/forex'>
          <a>Forex</a>
        </Link>
      </nav>
    </aside>
  )
}

export default styled(Sidebar)`
  display: none;
  position: relative;
  background-color: var(--white);

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 240px;
  }

  nav {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 60px;

    a {
      text-decoration: none;
      color: var(--blue-2);

      :hover {
        text-decoration: underline;
      }
    }
  }
`
