import React from 'react'
import styled from 'styled-components'

import Card from '../../../../components/Card'
import { News } from '../../support/types'
import Description from './Description'

type Props = {
  className: string
  news: News
} & React.FunctionComponent

const Title = styled.p`
  font-size: 16px;
  margin: 0 0 16px 0;

  :hover {
    text-decoration: underline;
  }
`

const Image = styled.img`
  width: 120px;
  margin-right: 16px;

  @media (min-width: 768px) {
    width: 200px;
  }
`

function NewsCard({ className, news }: Props) {
  return (
    <Card className={className}>
      <a href={news.url} target='_blank' rel='noopener noreferrer'>
        <Image src={news.image} />
      </a>
      <div>
        <a href={news.url} target='_blank' rel='noopener noreferrer'>
          <Title>{news.headline}</Title>
        </a>
        <Description>{news.summary}</Description>
      </div>
    </Card>
  )
}

export default styled(NewsCard)`
  justify-content: flex-start;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: var(--blue-1);
  }
`
