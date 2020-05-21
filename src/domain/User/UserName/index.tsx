import React from 'react'

type Props = {
  children: React.ReactNode
}

function Name({ children }: Props) {
  return <p>{children}</p>
}

export default Name
