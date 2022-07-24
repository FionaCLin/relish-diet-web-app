import {getRecipesSvc} from '../../lib/recipes/index.js';

export default async function getRecipes(request, response, next) {
  try {
    const {memberId} = request.query
    console.log(memberId);
    const result = await getRecipesSvc({memberId});
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
