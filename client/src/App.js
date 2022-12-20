import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Quill from './assets/images/quill.png';
import Menu from './components/Menu';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

import { Layout  } from 'antd';

const { Header, Footer } = Layout;


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
            <Layout style={{height: '98vh'}}>
            <Header style={{ background: '#e5989b' }}>
              <h1 className="ficTroupe">
                <img style={{ width: '45px' }} src={Quill} alt="" id="quill"></img>
                <Link style={{color: '#211534'}} to="/">FicTroupe</Link>
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
                  path='/login'
                  element={<Login />}
                />
                <Route
                  path='/signup'
                  element={<Signup />}
                />
              </Routes>

            <Footer style={{ textAlign: 'center', background: '#FFDAD1' }}>
              FicTroupe 2022 Created by SAJE
            </Footer>

            </Layout>
            </>
          </Router>

      
    </ApolloProvider>
  );
}
export default App;
