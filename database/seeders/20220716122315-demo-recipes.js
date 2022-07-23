"use strict";
const recipesList = [
  { title: "Caramel Apple", image: "apple" },
  { title: "Popeye toast with eggs", image: "recipe" },
  { title: "Pistachio and figs cake", image: "cake" },
  { title: "Tender salmon on bed of salad", image: "chicken" },
  { title: "Meatball migoreng", image: "meatball" },
  { title: "Tomato and basil pasta", image: "paella" },
  { title: "Sunfried tomato and olives pizza", image: "pizza" },
  { title: "Berrilicious porridge", image: "porridge" },
  { title: "Sunfried tomato and olives pizza", image: "protein" },
  { title: "Toasted stacked foccacia sandwich", image: "sandwich" },
  { title: "Banana pudding with caramel sauce", image: "soup" },
];
const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    const recipes = recipesList.map(({ title, image }) => ({
      title,
      memberId: "31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba",
      images: JSON.stringify([{ title, url: `${image}.jpg` }]),
      calories: 0,
      fats: 0,
      protein: 0,
      cabs: 0,
      sodium: 0,
      createdBy: "SEEDED",
      updatedBy: "SEEDED",
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    try {
      await queryInterface.bulkInsert("recipes", recipes, {
        transaction,
      });
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
        "recipes",
        { memberId: "31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba" },
        { transaction }
      ); // eslint-disable-line unicorn/no-null
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
