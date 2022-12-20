import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String) {
    user(username: $username) {
      _id
      username
      email
      myCharacters {
        _id
        name
        description
        universe
        status
      }
    }
  }
`;


export const QUERY_CHARACTERS = gql`
  query getCharacters {
    characters {
        _id
        name
        author
        universe
        description
        status
    }
  }
`;

export const QUERY_CHARACTER = gql`
query getSingleCharacter($characterId: ID!){
    character(characterId: $characterId) {
      _id
      author
      background
      name
      status
      universe
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       myCharacters {
//         _id
//         name
//         description
//         universe
//         status
//     }
//   }
// `;
