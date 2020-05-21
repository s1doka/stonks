import React from 'react'
import BasicLayout from '../../layout/BasicLayout'
import { useRouter } from 'next/router'

function StockPage() {
  let {
    query: { id }
  } = useRouter()

  return (
    <div>
      <h1>Stock</h1>
      <p>{id}</p>
    </div>
  )
}

StockPage.layout = BasicLayout

export default StockPage
