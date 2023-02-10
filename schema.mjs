import { transactionsResolver, transactionResolver } from "./resolvers.mjs";
import { accountOverviewResolver } from "./overviewResolver.mjs"

import {
  GraphQLID,
  GraphQLInt,
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


const AccountOverViewType = new GraphQLObjectType({
  name: "AccountOverview",
  fields: {
    balance: { type: GraphQLString },
  },
});

const AccountType = new GraphQLObjectType({
  name: "Account",
  fields: {
    overview: {
      type: AccountOverViewType,
      resolve: accountOverviewResolver,
    },
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve: transactionsResolver,
    },
  },
});



export const schema = new GraphQLSchema({
  query: AccountType,
});
