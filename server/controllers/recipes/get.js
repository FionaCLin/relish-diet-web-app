import {getSvc} from '../../lib/recipes/index.js';

export default async function get(request, response, next) {
  try {
    const {memberId} = request.query

    const result = await getSvc({memberId});

    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
