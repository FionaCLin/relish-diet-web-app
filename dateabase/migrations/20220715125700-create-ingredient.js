"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    const fields = {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      UOM: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      calories: {
        type: Sequelize.FLOAT,
      },
      fats: {
        type: Sequelize.FLOAT,
      },
      protein: {
        type: Sequelize.FLOAT,
      },
      cabs: {
        type: Sequelize.FLOAT,
      },
      sodium: {
        type: Sequelize.FLOAT,
      },
      type: {
        type: Sequelize.STRING,
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
      await queryInterface.sequelize.query(
        'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
        { transaction }
      );
      await queryInterface.createTable("ingredients", fields, { transaction });
      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("ingredients", { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
