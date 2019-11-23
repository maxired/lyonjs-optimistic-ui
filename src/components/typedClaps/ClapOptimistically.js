import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from '../common';
import { GET_CLAPS } from './DisplayClaps'

const CLAP_MUTATION = gql`mutation { clap { _id value } }`;

const ClapOptimistically = () => {

  const { data : { claps: currentClap = { value: 0 } } = {} } = useQuery(GET_CLAPS)

  const [clapMutation] = useMutation(
    CLAP_MUTATION,
    {
      optimisticResponse: {
        clap: {
          ...currentClap,
          value: currentClap.value + 1
        },
      },
    }
  );

  return (<Button onClick={clapMutation}>👏</Button>);
}

export default ClapOptimistically;
