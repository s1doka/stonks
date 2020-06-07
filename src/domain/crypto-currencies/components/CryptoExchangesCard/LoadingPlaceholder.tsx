import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingPlaceholder = () => (
  <ContentLoader
    viewBox='0 0 380 70'
    uniqueKey='crypto-card-placeholder'
    backgroundColor='var(--gray-2)'
    foregroundColor='var(--gray-1)'
  >
    <rect x='0' y='0' rx='5' ry='5' width='400' height='200' />
  </ContentLoader>
)
