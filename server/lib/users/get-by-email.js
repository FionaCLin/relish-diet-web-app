import {Member} from '../../db-initi.js';

export default async function getByEmail({email}) {
  return Member.findOne({where: {email}});
}
