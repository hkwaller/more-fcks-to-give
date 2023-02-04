export default async function handler(req, res) {
  const queryParams = new URLSearchParams()

  queryParams.set('action', 'opensearch')
  queryParams.set('format', 'json')
  queryParams.set('formatversion', '2')
  queryParams.set('search', req.query.term)

  const t = await fetch(`https://en.wikipedia.org/w/api.php?${queryParams.toString()}`)
  let result = await t.text()

  try {
    result = JSON.parse(result)
  } finally {
    res.status(200).json(result)
  }

  res.status(500).json({})
}
