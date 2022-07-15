module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert(
        'UOMs',
        [
          {
            abbreviation: 'g',
            description: 'grams',
            createdBy: 'SEEDED',
            updatedBy: 'SEEDED',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            abbreviation: 'ml',
            description: 'millilitres',
            createdBy: 'SEEDED',
            updatedBy: 'SEEDED',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            abbreviation: 'tbsp',
            description: 'tablespoons',
            createdBy: 'SEEDED',
            updatedBy: 'SEEDED',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            abbreviation: 'tsp',
            description: 'teaspoons',
            createdBy: 'SEEDED',
            updatedBy: 'SEEDED',
            createdAt: new Date(),
            updatedAt: new Date(),
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
  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('UOMs', null, {transaction}); // eslint-disable-line unicorn/no-null
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
