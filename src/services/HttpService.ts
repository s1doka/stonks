import { stringify } from 'query-string'

let headers = {
  'Content-Type': 'application/json'
}

export async function get<T>(url: string, query?): Promise<T> {
  if (query) {
    url += `?${stringify(query)}`
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    })
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}
