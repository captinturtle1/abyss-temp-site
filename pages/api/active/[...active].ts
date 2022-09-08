export default async function handler(req, res) {
    try {
      res.redirect(307, "https://ipfs.io/ipfs/QmajTApCkVkXGeNotAE9XAwYDc3B8AgriFtd5jthWUUWWt/Active.gif")
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }