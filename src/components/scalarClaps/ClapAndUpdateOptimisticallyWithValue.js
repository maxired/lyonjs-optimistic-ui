import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from '../common';
import { GET_CLAPS } from './DisplayClaps'

const CLAP_MUTATION = gql`mutation { clapWithValue }`;

const ClapAndUpdateOptimisticallyWithValue = () => {
  const [clapMutation] = useMutation(
    CLAP_MUTATION,
    {
      optimisticResponse: {
        clapWithValue: 47,
      },
      update: (cache, mutationResult) => {
        if(mutationResult.data.clapWithValue !== undefined){
          cache.writeQuery({
            query: GET_CLAPS,
            data: { claps: mutationResult.data.clapWithValue }
          });
        }
      }
    }
  );

  return (<Button onClick={clapMutation}>👏</Button>);
}

export default ClapAndUpdateOptimisticallyWithValue;
