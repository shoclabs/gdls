import React from 'react';
import { NativeRouter } from 'react-router-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { MainRouter } from './src/screens/MainRouter';

const productionAPIUrl = 'https://gdls-backend.herokuapp.com/graphql';
const localhostAPIUrl = 'http://localhost:5001/graphql';

export const apolloClient = new ApolloClient({
  uri: localhostAPIUrl,
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

