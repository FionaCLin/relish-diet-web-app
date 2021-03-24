import { login as loginLib } from '../../lib/users/index.js'

export default async function login(req, res, next) {
  try {
    const { password = '', username = '' } = req.body;
    const user = await loginLib({ password, username })
    res.send({ user })
  } catch (error) {
    res.status(400).send(error.message); 
  }
}
