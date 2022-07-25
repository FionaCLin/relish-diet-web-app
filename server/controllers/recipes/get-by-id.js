import {getByIdSvc} from '../../lib/recipes/index.js';

export default async function getById(request, response, next) {
  try {
    const {recipeId} = request.params;

    const result = await getByIdSvc({id: recipeId});
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
