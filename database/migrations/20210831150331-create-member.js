module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    const fields = {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      goal: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      caloriesGoal: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      gender: {
        type: Sequelize.STRING,
        defaultValue: 'undetermined',
      },
      avatar: {
        type: Sequelize.STRING,
        default: '',
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    };
    try {
      await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";', {transaction});
      await queryInterface.createTable('members', fields, {transaction});
      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('members', {transaction});
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
