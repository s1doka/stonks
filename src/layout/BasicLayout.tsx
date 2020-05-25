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
  height: 100vh;
  width: 100vw;

  main {
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      width: 1140px;
    }
  }
`
