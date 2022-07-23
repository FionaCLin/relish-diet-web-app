import {Member} from '../../database-initi.js';

export default async function updatedByUserId({id, values}) {
  return Member.update(values, {where: {id}});
}
