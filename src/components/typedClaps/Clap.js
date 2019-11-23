import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from '../common';

const CLAP_MUTATION = gql`mutation { clap { _id value } }`;


const Clap = () => {
  const [clapMutation] = useMutation(CLAP_MUTATION);

  return (<Button onClick={clapMutation}>👏</Button>);
}

export default Clap;
