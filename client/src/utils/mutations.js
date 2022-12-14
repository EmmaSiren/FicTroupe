import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
//   mutation login($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter($name: String!, $background: String, $universe: String, $status: String ) {
    createCharacter(name: $name, background: $background, universe:$universe, status:$status) {
      _id
      name
      background
      status
    }
  }
`;

export const UPDATE_CHARACTER = gql`
mutation UpdateCharacter($updateCharacterId: ID!, $background: String!) {
    updateCharacter(id: $updateCharacterId, background: $background) {
      _id
      author
      background
      name
    }
  }
`

