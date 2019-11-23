import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from '../common';
import { GET_CLAPS } from './DisplayClaps'

const CLAP_MUTATION = gql`mutation { clapWithValue }`;

const ClapAndUpdateOptimisticallyCorrectWithValue = () => {

  const { data : { claps: currentClaps = 0 } = {} } = useQuery(GET_CLAPS)

  const [clapMutation] = useMutation(
    CLAP_MUTATION,
    {
      optimisticResponse: {
        clapWithValue: currentClaps + 1,
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

export default ClapAndUpdateOptimisticallyCorrectWithValue;
