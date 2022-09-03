import {getByIdSvc} from '../../lib/ingredients/index.js';

export default async function getById(request, response, next) {
  try {
    const {id} = request.params;

    const result = await getByIdSvc({id});

    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
