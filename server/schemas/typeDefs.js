const { gql } = require('apollo-server-express');

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
    author: String
    description: String
    universe: String
    status: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String): User
    characters: [Character]
    character(characterId:ID!): Character
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createCharacter(name: String!, author: String, description: String!, universe: String!, status: String): Character
    updateCharacter(characterId: ID!, Inputdescription: String!): Character
    deleteCharacter(characterId: ID!): Character
  }
`;

module.exports = typeDefs;
// user(username: String!): User