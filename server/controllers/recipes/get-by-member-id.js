import {getByMemberIdSvc} from '../../lib/recipes/index.js';

export default async function getByMemberId(request, response, next) {
  try {
    const {memberId} = request.params;
    const result = await getByMemberIdSvc({memberId});
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
