export default async function handler(req, res) {
    try {
      res.redirect(307, "https://ipfs.io/ipfs/Qme5QHNUjUiZbao7Si54uveTJtUZJ3gPgVbUSJet1h4ybY/Expired.gif")
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }