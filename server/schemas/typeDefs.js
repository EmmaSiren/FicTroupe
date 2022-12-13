const { gql } = require('apollo-server-express');

 // Need to update createUser: User/Auth 
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    myCharacters:[Character]
  }

  type Character {
    _id: ID!
    name: String!
    author: String!
    universe: String
    status: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId:ID!): Character
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createCharacter(name: String!): Character
    updateCharacter(id: ID!, background: String!): Character
    deleteCharacter(characterId: ID!): Character
  }
`;

module.exports = typeDefs;
