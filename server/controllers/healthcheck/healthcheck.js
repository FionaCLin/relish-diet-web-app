import {healthcheck as healthcheckLibrary} from '../../lib/healthcheck/index.js';

export default async function healthcheck(request, response, next) {
  try {
    const {input: query = ''} = request.query;
    const responseString = await healthcheckLibrary({query});
    response.json(`${responseString}`);
  } catch (error) {
    next(error);
  }
}
