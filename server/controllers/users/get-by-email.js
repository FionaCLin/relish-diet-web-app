import {getByEmailSvc} from '../../lib/users/index.js';

export default async function getByEmail(request, response, next) {
  try {
    const {email} = request.params;
    const result = await getByEmailSvc({email});
    response.json(result);
    console.log('result = ' + result + ' email ' + email);
  } catch (error) {
    next(error.message);
  }
}
