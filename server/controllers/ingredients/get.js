import {getSvc} from '../../lib/ingredients/index.js';

export default async function get(request, response, next) {
  try {
    const {keyword, limit, offset} = request.query;

    let result = await getSvc({keyword, offset, limit});

    if (!result?.count) {
      // fetch result is empty, it needs to call external api to find to load the ingredient
      result = [];
      // after fetched result, save it in the DB for future calls
    }
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
