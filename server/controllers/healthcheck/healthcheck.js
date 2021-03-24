export default async function healthCheck (req, res, next) {
    res.send (`Request URL:000 ${req.originalUrl}`)
 }
 