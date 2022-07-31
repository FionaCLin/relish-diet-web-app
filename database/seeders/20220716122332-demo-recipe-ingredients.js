"use strict";
const recipeIds = [
  "508f0f43-d804-401f-9548-2cdb8a0bb196",
  "e9fb994b-1c7f-4073-bc96-9bedc23d05c9",
  "df278f45-4432-4dcd-9ad0-0614db2874ec",
  "ea0574b3-8d18-431e-9f97-212955ad5a3e",
  "aace1a64-8643-4822-8895-1d0543de860b",
  "e94c1e15-cd17-4c9f-bf5f-63a92aca4958",
  "4315c406-ab05-48f9-9415-2c2da87a2cbf",
  "30e86577-4325-4a75-820a-35fac6c384f2",
  "6f78aead-7184-4e27-989c-c768548866c2",
  "bf5a46a0-38a7-4680-98b5-68feb9bf3e3a",
  "bf1bdbb4-4c9b-435b-ae02-351c0dabcea0",
];
const ingredientIds = [
  "6d7c97ae-2a8a-463d-b2a1-d90e0e9db969",
  "6a002c66-594a-4d59-8110-f60ecd12fe04",
  "f9f273e2-d5b4-4ecc-9820-9526df8374b2",
  "a36d519a-91f0-4843-a708-fee851675d03",
  "4686e37b-3d3a-4707-8efd-58ef2eb9641e",
  "d54a2899-bc5a-4631-8868-9e53844dbb31",
  "92299be0-013b-44b7-9808-0650d22a6f6a",
  "2cdcfb10-fbc0-45a4-b77e-e76c5891e584",
  "ccbbd7a4-f4c6-4904-939b-248e80cb9996",
  "b65a6a96-d9f1-4115-bb40-5224829dcb82",
  "68069277-64d0-4eab-8782-648bdff72ce5",
  "e0360672-3288-4bef-9eff-eedf0cb6bad8",
  "1dd7dd42-52ef-4c1d-bb8e-fc55f5208bf7",
  "426a80ce-2bbf-4876-bcde-3f61271dcbb1",
  "754dd094-175f-484f-b93f-a39d41bdce6f",
  "3b702b4b-5d62-44f1-ab33-18b3b79c335d",
  "808d805a-3b14-472e-b284-1e616fd37afd",
  "3acc2154-eca7-4042-9180-54c42237807f",
  "065e7c28-8570-4408-90a2-81bd665af493",
  "b3bb3a64-1f7a-4018-ab2c-dae62ef6f7a2",
  "cc41160a-3bf1-4315-83e7-bf3b05055b49",
  "91851ebd-cf90-4f20-a12a-32ed73076cc3",
  "af092026-a249-4ff2-bd51-fce9c9035a9a",
  "abc39251-2e72-4697-949b-f0b492d280a0",
  "89eb8e94-6ee8-4097-9e30-64c5cf147715",
  "2151d321-7fb2-4733-bbb1-e5ea503f2e82",
  "3667ca5b-bfa6-4d5b-a45b-8b44165507b5",
  "261081a5-ced3-4a40-8f1b-22d3abbd87f0",
  "07502fee-a460-4a74-bb4f-4e3db431c97d",
  "e8f8a470-f8a0-4ba6-8677-b357c597d1d1",
  "182f69f5-9cba-4925-86a2-737eb77a8178",
  "77c46cf5-3a7f-41ac-872c-5bb12b5ac4d5",
  "5f086484-728f-4a7f-9653-c6b794f6e2af",
  "cad312a3-bd1d-4205-b4ff-9ab83d31be01",
  "1eed21fe-17ac-43cb-bdf6-c5bc67f10ff6",
  "66638781-f29f-4222-aa80-e11d3b14d6b6",
  "da5a0ef0-d010-4202-929d-28b4cfad2a24",
  "afb91924-32a3-46dc-826c-2f5bef4ce017",
  "ea852e96-da0f-4019-82ac-9944b62d5d26",
  "a6b68b6c-c081-4030-8ef2-98decfeca3d9",
  "b6d8f48e-8efa-49dd-a1ac-018135ad33b2",
  "9fd5700b-bb85-45d7-868e-4d1735b5e784",
  "0d4fb387-26d1-4454-a28e-56d9b47fb4d2",
  "309fac56-5740-449c-9f9e-da7d6c512eaf",
  "65349a4e-fa7b-4e54-aafb-062b8fbd8875",
  "ed945398-d93f-434a-a8d9-0e4870fcc82d",
  "7b8a69ab-0de2-4022-b462-4455a599d5b9",
  "83c8396c-3d65-4dae-885a-f17bb958374c",
  "481f9f1a-6571-4492-9f7b-76ac32464eb9",
  "b97f2d12-0b6c-40d4-a199-d31750c407ec",
  "160cc3bf-56fa-458d-9c83-9252b6dbdaee",
  "667f7508-f8a3-488c-a107-09d998d4b098",
  "abdd5946-f26f-46ca-9ed5-88954baba7a7",
  "b1b62105-2a09-4064-8a06-05ae2781181c",
  "435344b0-9d99-4719-aaad-bf310381ba7a",
  "f304fbb2-bed7-46f0-b3f3-82b289ae55d8",
  "777a4cfa-716a-4361-bd7e-1639df4d8566",
  "914b986d-fe4f-4bd9-8666-6b72449d3568",
  "d6dc6743-4585-4d77-ab0d-f7a032278a65",
  "390c61ef-0943-4bf5-a6d1-eed72fd068da",
  "d852c062-a2a8-46e6-b64a-ba255518ff11",
  "70a6bf7f-396b-4226-b4ea-1aea2f7a9f38",
  "debcec06-f6d6-492a-9456-db9875940a41",
  "3c42ec26-4380-43b2-b66c-111b11b7ab05",
  "a2eefd65-e598-4f59-90ba-828d16b1e65e",
  "8f01fa59-364e-4b91-b712-6613e7d1e6d8",
  "3f9a3d64-a081-4ab7-aa9e-266a864a0ff0",
  "2c0ced4e-077d-4e1c-9326-75c54f17ae83",
  "03e41e9a-6dbd-4fe8-84b1-5170ec746010",
  "1952a2d1-1718-4f2e-931e-df74f49494b1",
  "350901d0-a22c-4b1a-aa27-a9a4d2cabd74",
  "e92817ce-4510-4b6c-a812-2a69d636607b",
  "3d7c6866-a9b1-419a-b327-cd81f70af700",
  "7a319714-05bc-4e2b-b275-cb486602a463",
  "b5d6e38d-51bb-473d-a689-07ba2456e132",
  "6cfdd05f-f633-4f20-bc71-7c88d3719e6e",
  "2f4a2137-3121-4968-8fd7-ae2e3b17e8b8",
  "0b2656dd-8d93-44ac-b2a1-413d1db0b244",
  "9099cd1a-fe8b-4867-a4e6-b7a46783e680",
  "2c744a6e-bee1-4bc2-a027-e0906129f123",
  "3136d51d-ec25-4963-813e-2f5545991a04",
];
module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    const recipeIngredients = recipeIds.reduce((acc, recipeId) => {
      const recipeIngs = new Array(4).fill(0).map(() => {
        const amount = Math.random() * ingredientIds.length;
        const ingredientId = ingredientIds[Math.floor(amount)];
        return {
          recipeId,
          ingredientId,
          amount,
          createdBy: "SEEDED",
          updatedBy: "SEEDED",
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      });
      acc.push(...recipeIngs);
      return acc;
    }, []);
    try {
      await queryInterface.bulkInsert("recipe_ingredients", recipeIngredients, {
        transaction,
      });
      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete("recipe_ingredients", null, {
        transaction,
      }); // eslint-disable-line unicorn/no-null
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
