import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import clientFactory from './clientFactory';

const providerFactory = (endpoint) => {
  const client = clientFactory(endpoint)

  return ({ children }) => (<ApolloProvider client={client}>{children}</ApolloProvider>)
}

export default providerFactory
