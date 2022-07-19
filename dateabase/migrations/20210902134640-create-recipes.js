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
      memberId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "members",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      method: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      calories: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      fats: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      protein: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      cabs: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      sodium: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      rate: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      images: {
        type: Sequelize.JSON,
        defaultValue: [],
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
      await queryInterface.createTable("recipes", fields, { transaction });
      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("recipes", { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
