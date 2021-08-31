'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      
      await queryInterface.bulkInsert(
        'Members',
        [
          {
            firstName: 'Fiona',
            lastName: 'Lin',
            email: 'fiona.lin1001@gmail.com',
            birthday: new Date(2000, 1, 1),
            createdBy: 'SEEDED',
            updatedBy: 'SEEDED',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ],
        {transaction},
      );
      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('Members', null, {transaction});
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
