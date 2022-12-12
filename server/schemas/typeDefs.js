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
    Characters: [Character]
    comments: [Comment]
  }

  type Mutation {
    createUser: User!
    updateUser: User!
    createCharacter: Character!
    updateCharacter: Character!
    deleteCharacter: Character!

  }
`;

module.exports = typeDefs;
