import React from 'react';
import { NativeRouter } from 'react-router-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { MainRouter } from './src/screens/MainRouter';
import { authStore, hidrateAuthStore } from './src/stores/auth-store';
import { useAsync } from 'react-async-hook';

const productionAPIUrl = 'https://gdls-backend.herokuapp.com/graphql';
const localhostAPIUrl = 'http://localhost:5001/graphql';

export const apolloClient = new ApolloClient({
  uri: productionAPIUrl,
  credentials: 'omit',
  async request(operation) {
    const { token } = authStore;
    const headers = { 'token': token };
    operation.setContext({ headers });
  },
});

export default function App() {
  const { loading } = useAsync(hidrateAuthStore, []);
  if (loading) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <MainRouter client={apolloClient} />
      </NativeRouter>
    </ApolloProvider>
  );
}
