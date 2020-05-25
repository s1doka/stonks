import React from 'react'
import styled from 'styled-components'

import Sidebar from 'src/components/Sidebar'

type Props = {
  children: React.ReactNode
  className: string
} & React.FunctionComponent

function BasicLayout({ children, className }: Props) {
  return (
    <div className={className}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default styled(BasicLayout)`
  display: flex;
  width: 100vw;
  height: 100vh;

  main {
    width: 90%;
    height: 100%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      width: 1140px;
    }
  }
`
