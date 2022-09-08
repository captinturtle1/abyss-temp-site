export default async function handler(req, res) {
    try {
      res.redirect(307, "https://ipfs.io/ipfs/QmNNL1kMxjoFGvCCHHJmEwCBqhMo5ZsqMuRKzMxws2apvy/")
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }