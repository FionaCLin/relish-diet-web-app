'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}
  Member.init(
    {
      id: {
        allowNull: false,
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
        defaultValue: '',
      },
      calories_goal: {
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
        defaultValue: 'undetermined',
      },
      avatar: {
        type: DataTypes.STRING,
        default: '',
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
      modelName: 'Member',
      timestamps: true,
      tableName: 'members',
    },
  );
  return Member;
};
