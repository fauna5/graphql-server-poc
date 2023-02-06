import { transactionsResolver, transactionResolver } from "./resolvers.mjs";

import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    merchant: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve: transactionsResolver,
    },
    transaction: {
      type: TransactionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: transactionResolver,
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
});
