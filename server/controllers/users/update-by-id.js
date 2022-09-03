import {updatedByUserIdSvc} from '../../lib/users/index.js';

export default async function updateById(request, response, next) {
  try {
    const {userId} = request.params;
    const values = request.body;
    const result = await updatedByUserIdSvc({id: userId, values});
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
