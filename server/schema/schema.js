"use strict";
const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID ,GraphQLString, GraphQLInt, GraphQLSchema } = graphql;
let dummy = [
  {
    id: "1",
    email: "fiona.lin@gmail.com",
    username: "fiona.lin@gmail.com",
    birthday: "2000-10-01",
    familyname: "Lin",
    givenname: "Fiona",
    goal: 50,
    calories_goal: 2000,
    gender: "Female",
    avatar: "hello.jpg"
  },
  {
    id: "2",
    email: "fiona.lindley@gmail.com",
    username: "fiona.lindley@gmail.com",
    birthday: "2000-10-01",
    familyname: "Lindley",
    givenname: "Fiona",
    goal: 50,
    calories_goal: 2000,
    gender: "Female",
    avatar: "world.jpg"
  }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    birthday: { type: GraphQLString },
    familyname: { type: GraphQLString },
    givenname: { type: GraphQLString },
    goal: { type: GraphQLInt },
    calories_goal: { type: GraphQLInt },
    gender: { type: GraphQLString },
    avatar: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return dummy.find(x=>x.id==args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
