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

export const QUERY_CHARACTERS = gql`
  query getAllCharactersOfAUser($username: String!) {
    characters(username: $username) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

// Added Me query when the me/login/auth completed in the server
// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       myCharacters {
            // _id
            // name
            // background
            // universe
            // status
//     }
//   }
// `;
