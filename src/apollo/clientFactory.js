import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

 const clientFactory  = (endpoint = 'graphql') => new ApolloClient({
  uri: `https://lyonjs-optimistic-ui.maxired.now.sh/api/${endpoint}`,
  fetch,
});

export default clientFactory
