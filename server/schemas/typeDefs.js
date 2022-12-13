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
    author: String!
    universe: String
    status: String!
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    commentBody: String!
    username: String!
    character: Character
  }

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId:ID!): Character
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, password: String!): User
    createCharacter(name: String!, universe: String): Character
    updateCharacter(id: ID!): Character
    deleteCharacter(characterId: ID!): Character
    createComment(characterId: ID! commentBody: String!): Comment
    deleteComment(characterId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;
