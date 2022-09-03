import {getSvc} from '../../lib/recipes/index.js';

export default async function get(request, response, next) {
  try {
    const {memberId, keyword} = request.query
    console.log('keyword = ' + keyword)

    const result = await getSvc({memberId, keyword});

    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
