import { get } from '../../../services/HttpService'

let url = 'https://finnhub.io/api/v1/news'
let API_KEY = process.env.FINNHUB_API_KEY

export default async function handler(req, res) {
  let { category } = req.query
  let data = await get(`${url}?category=${category}&token=${API_KEY}`)

  res.json(data)
}
