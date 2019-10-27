import React from 'react';
import { NativeRouter } from 'react-router-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { MainRouter } from './src/screens/MainRouter';

const client = new ApolloClient({
  uri: 'https://gdls-backend.herokuapp.com/graphql',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <MainRouter client={client} />
      </NativeRouter>
    </ApolloProvider>
  );
}

