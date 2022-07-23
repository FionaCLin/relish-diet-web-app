"use strict";
const ingredientList = [
  "apple",
  "appam",
  "aperol",
  "aprium",
  "apricot",
  "appadam",
  "applepear",
  "appletini",
  "applejacks",
  "applejuice",
  "applesauce",
  "applebutter",
  "salt",
  "sake",
  "shake",
  "sauce",
  "salsa",
  "scone",
  "samosa",
  "salade",
  "salmon",
  "salami",
  "sub",
  "suet",
  "sushi",
  "sugar",
  "sumac",
  "sundae",
  "subway",
  "supper",
  "sunfish",
  "sunchip",
  "raw sugar",
  "sugar peas",
  "palm sugar",
  "sugar cube",
  "cane sugar",
  "white sugar",
  "maple sugar",
  "brown sugar",
  "icing sugar",
  "fig",
  "feta",
  "fish",
  "flan",
  "flax",
  "fries",
  "flour",
  "filet",
  "farro",
  "fanta",
  "flips",
  "flauta",
  "flagel",
  "flapjack",
  "flatbread",
  "flageolet",
  "flounder",
  "rye flour",
  "flognarde",
  "florentine",
  "rice flour",
  "bread flour",
  "spelt flour",
  "white flour",
  "almond flour",
  "soy flour",
  "egg",
  "evoo",
  "eggo",
  "equal",
  "ensure",
  "eggnog",
  "edamame",
  "eggnog",
  "eggroll",
  "eggbake",
  "eggplant",
  "eggwhite",
  "eggbeater",
  "dove eggs",
];
module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    const ingredients = ingredientList.map((name) => ({
      name,
      UOM: 'gram',
      calories: 0,
      fats: 0,
      protein: 0,
      cabs: 0,
      sodium: 0,
      type: 'Uncategorised',
      createdBy: "SEEDED",
      updatedBy: "SEEDED",
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    try {
      await queryInterface.bulkInsert("ingredients", ingredients, {
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
      await queryInterface.bulkDelete("ingredients", null, { transaction }); // eslint-disable-line unicorn/no-null
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
