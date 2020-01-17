"use strict";
const graphql = require("graphql");
const util = require("util");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema
} = graphql;

let dummyRecipes = [
  {
    id: 100,
    member_no: 1,
    title: "Popeye toast with eggs",
    rate: 4,
    created_at: "2001-02-04",
    images: ["images/recipe.jpg", "images/recipe2.png", "images/recipe3.jpg"],
    macros: {
      Calories: 1025,
      Carbs: 32,
      Protein: 24,
      Fats: 15,
      Sodium: 2
    },
    method:
      "Preheat the grill to high.\n" +
      "Lay the tomato vines in a large baking tray, prick each tomato with the tip of a sharp knife" +
      " and grill for 4 minutes, then add the bread to the tray to toast on both sides.\n" +
      "Meanwhile, crack 1 egg into a blender, add the ham, spinach, a good pinch of black pepper and the milk and blitz until smooth.\n" +
      "Take the tray from under the grill and divide the green eggy mixture between" +
      "the four pieces of toast, spreading it right out to the edges.\n" +
      "Dry fry the remaining 2 eggs in a non-stick frying pan on a medium heat, covering the pan with" +
      " a lid to steam and coddle the eggs on the top – cook to your liking.",
    ingredients: [
      "160 g of cherry tomatoes",
      "4 slices of wholemeal bread",
      "3 large eggs",
      "80 g of baby spinach"
    ],
    comments: [
      {
        commentor: 2,
        message:
          "Was a great meal, but my husband found it a little bit salty.",
        rating: 3
      },
      {
        commentor: 3,
        message: "Really good after doing a mid-morning workout!",
        rating: 4
      },
      {
        commentor: 4,
        message: "A bit strange for my tastes",
        rating: 2
      }
    ]
  },
  {
    id: 200,
    member_no: 2,
    title: "Pistachio and figs cake",
    rate: 3,
    created_at: "2013-02-04",
    images: ["images/cake.jpg"],
    macros: {
      Calories: 10,
      Carbs: 20,
      Protein: 30,
      Fats: 40,
      Sodium: 50
    },
    method: "",
    ingredients: [],
    comments: []
  },
  {
    id: 300,
    member_no: 3,
    title: "Toasted stacked foccacia sandwich",
    rate: 4,
    created_at: "2010-02-14",
    images: ["images/sandwich.jpg"],
    macros: {
      Calories: 10,
      Carbs: 20,
      Protein: 30,
      Fats: 40,
      Sodium: 50
    },
    method: "",
    ingredients: [],
    comments: []
  },
  {
    id: 400,
    member_no: 1,
    title: "Muscle and chives paella",
    rate: 4,
    created_at: "2014-05-04",
    images: ["images/paella.jpg"],
    macros: {
      Calories: 10,
      Carbs: 20,
      Protein: 30,
      Fats: 40,
      Sodium: 50
    },
    method: "",
    ingredients: [],
    comments: []
  },
  {
    id: 500,
    member_no: 4,
    title: "Banana pudding with caramel sauce",
    rate: 4,
    created_at: "2018-11-28",
    method: "",
    images: ["images/pudding.png"],
    macros: {
      Calories: 10,
      Carbs: 20,
      Protein: 30,
      Fats: 40,
      Sodium: 50
    },
    ingredients: [],
    comments: []
  }
];

module.exports = lib => {
  const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLID },
      email: { type: GraphQLString },
      username: { type: GraphQLString },
      birthday: { type: GraphQLString },
      familyname: { type: GraphQLString },
      givenname: { type: GraphQLString },
      goal: { type: GraphQLString },
      calories_goal: { type: GraphQLInt },
      gender: { type: GraphQLString },
      avatar: { type: GraphQLString }
    })
  });

  const BookmarkType = new GraphQLObjectType({
    name: "Bookmark",
    fields: () => ({
      id: { type: GraphQLID },
      recipe_id: { type: GraphQLID },
      user_id: { type: GraphQLID },
      user: {
        type: UserType,
        resolve(parent, args) {
          return dummyUsers.find(x => x.id == parent.user_id);
        }
      },
      recipe: {
        type: RecipeType,
        resolve(parent, args) {
          return dummyRecipes.find(x => x.id == parent.recipe_id);
        }
      }
    })
  });

  const RecipeType = new GraphQLObjectType({
    name: "Recipe",
    fields: () => ({
      id: { type: GraphQLID },
      member_no: { type: GraphQLID },
      creator: {
        type: UserType,
        resolve(parent, args) {
          return dummyUsers.find(x => x.id == parent.member_no);
        }
      },
      title: { type: GraphQLString },
      method: { type: GraphQLString },
      calories: { type: GraphQLFloat },
      fats: { type: GraphQLFloat },
      protein: { type: GraphQLFloat },
      cabs: { type: GraphQLFloat },
      sodium: { type: GraphQLFloat },
      rate: { type: GraphQLInt },
      images: { type: GraphQLString },
      created_at: { type: GraphQLString }
    })
  });

  const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      addUser: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
          username: { type: GraphQLString },
          birthday: { type: GraphQLString },
          givenname: { type: GraphQLString },
          familyname: { type: GraphQLString },
          goal: { type: GraphQLString },
          calories_goal: { type: GraphQLInt },
          gender: { type: GraphQLString },
          avatar: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        async resolve(parent, args) {
          let addUesr = util.promisify(lib.users.add);
          let setPassword = util.promisify(lib.users.setPassword);

          let res = await addUesr(args);
          if (res && args.password) {
            await setPassword(res.id, args.password);
          }
          return res;
        }
      },
      updateUser: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
          email: { type: GraphQLString },
          username: { type: GraphQLString },
          birthday: { type: GraphQLString },
          givenname: { type: GraphQLString },
          familyname: { type: GraphQLString },
          goal: { type: GraphQLString },
          calories_goal: { type: GraphQLInt },
          gender: { type: GraphQLString },
          avatar: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        async resolve(parent, args) {
          console.log(args, "&&&&")
          let setUesr = util.promisify(lib.users.set);
          let setPassword = util.promisify(lib.users.setPassword);
          
          
          
          let res = await setUesr(args.id, args);
          if (res && args.password) {
            await setPassword(res.id, args.password);
          }
          return res;
        }
      },
      addRecipe: {
        type: RecipeType,
        args: {
          member_no: { type: GraphQLID },

          title: { type: GraphQLString },
          method: { type: GraphQLString },
          calories: { type: GraphQLFloat },
          fats: { type: GraphQLFloat },
          protein: { type: GraphQLFloat },
          cabs: { type: GraphQLFloat },
          sodium: { type: GraphQLFloat },
          rate: { type: GraphQLInt },
          images: { type: GraphQLString },
          created_at: { type: GraphQLString }
        },
        async resolve(parent, args) {
          // let addUesr = util.promisify(lib.users.add);
          // let setPassword = util.promisify(lib.users.setPassword);
          // let res = await addUesr(args);
          // if (res && args.password) {
          //   await setPassword(res.id, args.password);
          // }
          // return res;
        }
      }
    }
  });

  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        async resolve(parent, args) {
          let getUesr = util.promisify(lib.users.get);
          let res = await getUesr(args.id);
          console.log(res);
          return res;
          // return dummyUsers.find(x => x.id == args.id);
        }
      },
      recipe: {
        type: RecipeType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return dummyRecipes.find(x => x.id == args.id);
        }
      },
      users: {
        type: new GraphQLList(UserType),
        async resolve(parent, args) {
          let db = lib.db;
          let query = util.promisify(db.query);
          // return dummyUsers;
          let sql;
          sql = "Select * From members";
          let res = await query(sql);
          console.log("---", res);
          return res;
        }
      },
      recipes: {
        type: new GraphQLList(RecipeType),
        resolve(parent, args) {
          return dummyRecipes;
        }
      }
    }
  });
  return new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });
};

// # mutation{
//   # 	addUser(
//   #     email: "fiona.lin1001@gmail.com",
//   #     username: "fionalin",
//   #     birthday: "2000-01-01",
//   #     givenname: "Fiona",
//   #     familyname: "Lin",
//   #     goal: "Lost weight",
//   #     calories_goal: 1200,
//   #     gender: "F",
//   #     avatar: "homi.png",
//   #     password: "fiona1234"
//   #   ) {
//   #     id
//   #     email
//   #     username
//   #     birthday
//   #     familyname
//   #     givenname
//   #     goal
//   #     calories_goal
//   #     gender
//   #     avatar
//   #   }
//   # }
// email: "fiona.lin1001@gmail.com",
// username: "fionalin",
// birthday: "2000-01-01",
// givenname: "Fiona",
// familyname: "Lin",
// goal: "Lost weight",
// calories_goal: 1200,
// gender: "F",
// avatar: "homi.png",
// password: "fiona1234",

// id
// email
// username
// birthday
// familyname
// givenname
// goal
// calories_goal
// gender
// avatar
