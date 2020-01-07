"use strict";
const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    birthday: { type: GraphQLString },
    familyname: { type: GraphQLString },
    givenname: { type: GraphQLString },
    goal: { type: GraphQLString },
    calories_goal: { type: GraphQLString },
    gender: { type: GraphQLString },
    avatar: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        args.id;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
