import {UOM} from '../../database-initi.js';

export default async function getUOM() {
  return UOM.findAll();
}
