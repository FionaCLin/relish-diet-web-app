import { sample as sampleLib } from '../../lib/sample/index.js'

export default async function sample(req, res, next) {
    const { input: query = '' } = req.query;
    const resStr = await sampleLib({ query })
    res.send(`${resStr}`)
}
