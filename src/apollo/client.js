import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://gatsby-functions.maxired.now.sh/api/graphql',
  fetch,
});