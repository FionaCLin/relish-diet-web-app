import {getUOMSvc} from '../../lib/recipes/index.js';

export default async function getUOM(request, response, next) {
  try {
    const result = await getUOMSvc();
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
