import {login as loginLibrary} from '../../lib/users/index.js';

export default async function login(request, response, next) {
  try {
    const {password = '', username = ''} = request.body;
    const user = await loginLibrary({password, username});
    response.send({user});
  } catch (error) {
    next(error.message);
  }
}
