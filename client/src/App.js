import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import SignUp from './components/signup';
import CharacterList from './assets/testingdata.js/CharacterList.js';
import CreateCharacter from './components/pages/CreateCharacter';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Menu from './components/Menu';

// const httpLink = createHttpLink({
//     uri: '/graphql',
//   });

//   const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('id_token');
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     };
//   });

//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

  function App() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <>
          <Menu />
          <Routes>
          <Route 
            path='/' 
            element={<Home />} 
          />
          </Routes>
        </>
      </Router>
      </ApolloProvider>
    );
  }
export default App;