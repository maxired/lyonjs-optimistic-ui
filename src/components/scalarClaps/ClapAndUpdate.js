import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from '../common';
import { GET_CLAPS } from './DisplayClaps'

const CLAP_MUTATION = gql`mutation { clap }`;

const ClapAndUpdate = () => {
  const [clapMutation] = useMutation(
    CLAP_MUTATION,
    {
      update: (cache, mutationResult) => {
        if(mutationResult.data.clap === 'ok'){
          const { claps } = cache.readQuery({ query: GET_CLAPS });
          cache.writeQuery({
            query: GET_CLAPS,
            data: { claps: claps + 12 }
          });
        }
      }
    }
  );

  return (<Button onClick={clapMutation}>👏</Button>);
}

export default ClapAndUpdate;
