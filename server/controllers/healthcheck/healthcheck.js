import {healthcheck as sampleLibrary} from '../../lib/sample';

export default async function healthcheck(request, response, next) {
  try {
    const {input: query = ''} = request.query;
    const responseString = await sampleLibrary({query});
    response.json(`${responseString}`);
  } catch (error) {
    next(error);
  }
}
