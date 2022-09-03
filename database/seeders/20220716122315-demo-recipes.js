"use strict";
const recipesList = [
  {
    id: "508f0f43-d804-401f-9548-2cdb8a0bb196",
    title: "Caramel Apple",
    image: "apple",
  },
  {
    id: "e9fb994b-1c7f-4073-bc96-9bedc23d05c9",
    title: "Popeye toast with eggs",
    image: "recipe",
  },
  {
    id: "df278f45-4432-4dcd-9ad0-0614db2874ec",
    title: "Pistachio and figs cake",
    image: "cake",
  },
  {
    id: "ea0574b3-8d18-431e-9f97-212955ad5a3e",
    title: "Tender salmon on bed of salad",
    image: "chicken",
  },
  {
    id: "aace1a64-8643-4822-8895-1d0543de860b",
    title: "Meatball migoreng",
    image: "meatball",
  },
  {
    id: "e94c1e15-cd17-4c9f-bf5f-63a92aca4958",
    title: "Tomato and basil pasta",
    image: "paella",
  },
  {
    id: "4315c406-ab05-48f9-9415-2c2da87a2cbf",
    title: "Sunfried tomato and olives pizza",
    image: "pizza",
  },
  {
    id: "30e86577-4325-4a75-820a-35fac6c384f2",
    title: "Berrilicious porridge",
    image: "porridge",
  },
  {
    id: "6f78aead-7184-4e27-989c-c768548866c2",
    title: "Sunfried tomato and olives pizza",
    image: "protein",
  },
  {
    id: "bf5a46a0-38a7-4680-98b5-68feb9bf3e3a",
    title: "Toasted stacked foccacia sandwich",
    image: "sandwich",
  },
  {
    id: "bf1bdbb4-4c9b-435b-ae02-351c0dabcea0",
    title: "Banana pudding with caramel sauce",
    image: "soup",
  },
];

const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    const recipes = recipesList.map(({ id, title, image }) => ({
      id,
      title,
      memberId: "31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba",
      images: JSON.stringify([{ title, url: `${image}.jpg` }]),
      calories: 0,
      fats: 0,
      protein: 0,
      carbs: 0,
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
