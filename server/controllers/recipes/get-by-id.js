import {getByIdSvc} from '../../lib/recipes/index.js';

export default async function updateById(request, response, next) {
  try {
    const {recipeId} = request.params;
    const result = await getByIdSvc({uuid: recipeId});
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
