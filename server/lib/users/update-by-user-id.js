import {Members} from '../../database-initi.js';

export default async function updatedByUserId({id, values}) {
  return Members.update(values, {where: {id}});
}
