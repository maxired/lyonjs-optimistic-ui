import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from '../common';
import { GET_CLAPS } from './DisplayClaps'

const CLAP_MUTATION = gql`mutation { clap }`;


const ClapAndRefresh = () => {
  const [clapMutation] = useMutation(
    CLAP_MUTATION,
    { refetchQueries: [{ query: GET_CLAPS }] }
  );

  return (<Button onClick={clapMutation}>👏</Button>);
}

export default ClapAndRefresh;
