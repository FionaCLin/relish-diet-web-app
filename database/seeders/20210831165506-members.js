module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert(
        "members",
        [
          {
            id: "31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba",
            firstName: "Fiona",
            lastName: "Lin",
            email: "fiona.lin1001@gmail.com",
            birthday: new Date(2000, 1, 1),
            createdBy: "SEEDED",
            updatedBy: "SEEDED",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        { transaction }
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
      await queryInterface.bulkDelete(
        "members",
        { id: "31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba" },
        { transaction }
      ); // eslint-disable-line unicorn/no-null
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
