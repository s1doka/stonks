import React from 'react'
import { AppProps } from 'next/app'

import 'normalize.css'
import 'public/global.css'

function Noop({ children }) {
  return children
}

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  let Layout = Component.layout || Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
