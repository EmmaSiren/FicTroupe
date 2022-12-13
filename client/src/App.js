import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NavTabs from './components/NavTabs';
import SignUp from './components/signup';
import Adopt from './components/pages/Adopt';
import CharacterList from './components/pages/CharacterList';
import CreateCharacter from './components/pages/CreateCharacter';



const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  function App() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <>
          <NavTabs />
          <Routes>
          
          </Routes>
        </>
      </Router>
      </ApolloProvider>
    );
  }
export default App;