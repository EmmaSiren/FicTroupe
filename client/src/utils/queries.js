import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      myCharacters {
        _id
        name
        background
        universe
        status
      }
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getAllCharacters {
    characters {
        _id
        name
        background
        universe
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

// Need to fix the query me
// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       myCharacters {
//             _id
//             name
//             background
//             universe
//             status
//     }
//   }
// `;
