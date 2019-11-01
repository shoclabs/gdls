import React from 'react';
import { NativeRouter } from 'react-router-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { MainRouter } from './src/screens/MainRouter';

export const apolloClient = new ApolloClient({
  uri: 'https://gdls-backend.herokuapp.com/graphql',
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <MainRouter client={apolloClient} />
      </NativeRouter>
    </ApolloProvider>
  );
}

