import React from 'react'
import styled from 'styled-components'

import NewsCard from '../NewsCard'
import { News } from '../../support/types'
import { getNews } from '../../services'
import SectionTitle from '../../../../components/SectionTitle'

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
`

function NewsList() {
  let [news, setNews] = React.useState<News[]>([])

  React.useEffect(() => {
    async function fetch() {
      try {
        let news = await getNews()
        let fiveNews = news.slice(0, 3)

        setNews(fiveNews)
      } catch (error) {
        setNews([])
      }
    }

    fetch()
  }, [])

  return (
    <div>
      <SectionTitle>News</SectionTitle>
      {/* TODO - Change card size via UserSettings(compact, default) */}
      <Grid>
        {news.map((newz, index) => (
          <NewsCard key={index} news={newz} />
        ))}
      </Grid>
      {/* TODO - Pagination */}
    </div>
  )
}

export default NewsList
