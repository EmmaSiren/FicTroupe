const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    followings: [User]
    followers: [User]
    draft_characters: [Character]
    original_characters: [Character]
    saved_characters: [Character]
    purchased_characters: [Character]
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
    commentBody: String!
    username: String!
    character: Character
    createdAt: Date
  }

  type Query {
    users: [User]
    characters: [Character]
    comments: [Comment]
    user(id: ID!): User
    character(id:ID!): Character
    comment(id:ID!): Comment
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
