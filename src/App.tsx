import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    //uri: "https://studio.apollographql.com/public/SpaceX-pxxbxen/explorer?variant=current",
    link: new HttpLink({
      uri: "https://corsproxy.io/?https://spacex-production.up.railway.app/"
    }),
  });

  return (
    <div className="App">
      <AuthProvider>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Profile/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </ApolloProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
