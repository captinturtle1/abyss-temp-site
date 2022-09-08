export default async function handler(req, res) {
    try {
      res.redirect(307, "https://ipfs.io/ipfs/QmXJZstj5E7ZF3nWXAcdxQGbcWZAuroL5Q5DjZWq2j3FLk/")
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }