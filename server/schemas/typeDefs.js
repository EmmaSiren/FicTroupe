const { gql } = require('apollo-server-express');

 // Need to update createUser: User/Auth 
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    myCharacters:[Character]
  }

  type Character {
    _id: ID!
    name: String!
    author: String
    description: String
    universe: String
    status: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    characters: [Character]
    character(characterId:ID!): Character
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createCharacter(name: String!, Inputbackground: String!, Inputuniverse: String!, Inputstatus: String!): Character
    updateCharacter(characterId: ID!, Inputbackground: String!): Character
    deleteCharacter(characterId: ID!): Character
  }
`;

module.exports = typeDefs;

// LINE 28 - user(username: String!): User
// LINE 30 -     me: User
