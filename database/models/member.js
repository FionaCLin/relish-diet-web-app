"use strict";

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthday: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      goal: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "",
      },
      caloriesGoal: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      height: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      weight: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      gender: {
        type: DataTypes.STRING,
        defaultValue: "undetermined",
      },
      avatar: {
        type: DataTypes.STRING,
        default: "",
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      updatedBy: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        /* eslint-disable  unicorn/no-null */
        defaultValue: null,
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: "members",
    }
  );
  return Member;
};
