import React from 'react'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'
import MobileMenuNavigation from '../components/MobileMenuNavigation'

type Props = {
  children: React.ReactNode
  className: string
} & React.FunctionComponent

function BasicLayout({ children, className }: Props) {
  return (
    <div className={className}>
      <Sidebar />
      <main>{children}</main>
      <MobileMenuNavigation />
    </div>
  )
}

export default styled(BasicLayout)`
  display: flex;
  width: 100vw;

  main {
    width: 85%;
    height: 100%;
    margin: 0 auto 80px;

    @media (min-width: 1140px) {
      width: 1140px;
    }
  }
`
