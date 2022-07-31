import {Members} from '../../database-initi.js';

export default async function getByEmail({email}) {
  return Members.findOne({where: {email}});
}
