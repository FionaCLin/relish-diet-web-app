import {login as loginLibrary} from '../../lib/users/index.js';
import {getByEmailSvc} from '../../lib/users/index.js';

export default async function login(request, response, next) {
  try {
    const {password = '', username = ''} = request.body;

    const user = await loginLibrary({password, username});
    const {email} = user.attributes;
    const profile = await getByEmailSvc({email});

    response.send({user, profile});
  } catch (error) {
    next(error.message);
  }
}
