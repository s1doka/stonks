import React from 'react'
import Header from 'src/components/Header'

type Props = {
  children: React.ReactNode
} & React.FunctionComponent

function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default BasicLayout
