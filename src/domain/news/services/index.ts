import { get } from '../../../services/HttpService'
import { News, NewsCategory } from '../support/types'
import { FetchGeneralNewsCantBeDoneException } from '../support/exception'

export async function getNews(
  category: NewsCategory = 'general'
): Promise<News[]> {
  try {
    return get('/api/news', { category })
  } catch (error) {
    throw new FetchGeneralNewsCantBeDoneException(`COULDN'T_GET_NEWS`)
  }
}

export function truncateNewsDescription(description: string) {
  return `${description.slice(0, 165)}...`
}
