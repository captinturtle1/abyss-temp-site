export default async function handler(req, res) {
    try {
      res.redirect(307, "https://ipfs.io/ipfs/QmVmkQtHcP6u3de5kY8Rxvs2NUMHuwgqrpv6Bcrue3Ccdw/")
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }