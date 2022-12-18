import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Test Done. Must have username, email, and password
export const ADD_USER = gql`
  mutation createUser(
    $username: String! 
    $email: String! 
    $password: String!
    ) {
    createUser(
      username: $username 
      email: $email 
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;

// Test Done. Must have name, background, universe, and status to have it work
export const ADD_CHARACTER = gql`
  mutation createCharacter($name: String!, $Inputbackground: String, $Inputuniverse: String, $Inputstatus: String ) {
    createCharacter(name: $name, background: $background, universe:$universe, status:$status) {
      _id
      name
      background
      status
    }
  }
`;

// Test Don. Must have the character id and input background. Currently can only update background
export const UPDATE_CHARACTER = gql`
mutation updateCharacter($characterId: ID!, $Inputbackground: String!) {
    updateCharacter(characterId: $characterId, Inputbackground: $Inputbackground) {
      _id
      author
      background
      name
    }
  }
`

// Test Done. Muse have the character Id
export const DELETE_CHARACTER = gql `
mutation deleteCharacter($characterId: ID!) {
  deleteUser(id: $characterId) {
    _id
    username
    email
  }
}
`


