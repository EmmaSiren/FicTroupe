import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import SignUp from './components/signup';
import CharacterList from './assets/testingdata.js/CharacterList.js';
import CreateCharacter from './components/pages/CreateCharacter';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Menu from './components/Menu';
import Quill from './assets/images/quill.png';


import { Layout  } from 'antd';

const { Header, Content, Footer } = Layout;


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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
            <Layout>
            <Header style={{ background: '#1890ff' }}>
              <h1 className="ficTroupe">
                <img style={{ width: '45px' }} src={Quill} alt="" id="quill"></img>
                FicTroupe
              </h1>
              <Menu /> 
            </Header>

              <Routes>
                <Route
                  path='/'
                  element={<Home />}
                />
                <Route
                  path='/dashboard'
                  element={<Dashboard />}
                />
                <Route
                  path='/createCharacter'
                  element={<CreateCharacter />}
                />
                <Route
                  path='/login'
                  element={<Login />}
                />
              </Routes>

            <Footer style={{ textAlign: 'center' }}>
              FicTroupe 2022 Created by SAJE
            </Footer>

            </Layout>
            </>
          </Router>

      
    </ApolloProvider>
  );
}
export default App;
