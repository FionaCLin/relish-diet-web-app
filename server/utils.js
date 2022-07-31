import {sequelize} from '../database/models';

export const clearDB = async () => {
  await sequelize.truncate({cascade: true});
};