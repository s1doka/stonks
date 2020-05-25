import React from 'react'
import styled from 'styled-components'

function SectionTitle({ className, children }) {
  return <p className={className}>{children}</p>
}

export default styled(SectionTitle)`
  font-size: 18px;
  font-weight: 700;
  color: var(--blue-1);
`
