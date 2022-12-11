const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    followings: Int
  }

  type Character {
    _id: ID!
    name: String!
    author: String!
    createdAt: Date
    universe: String
    status: String!
    comments: [Comment]
  }

  type Comment {
    _id: ID!
  }

  type Query {
    users: [User]
    Character(_id: String): [Character]
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
