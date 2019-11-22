import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

 const clientFactory  = (endpoint = 'graphql') => new ApolloClient({
  uri: `https://gatsby-functions.maxired.now.sh/api/${endpoint}`,
  fetch,
});

export default clientFactory
