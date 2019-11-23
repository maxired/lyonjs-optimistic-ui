import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Loader } from '../common';

export const GET_CLAPS = gql`query { claps { _id value } }`;

const DisplayClaps = () => {
  const { loading, error, data: { claps = { value: 0 } } = {} } = useQuery(GET_CLAPS)

  if (loading) return <Loader />

  return (<div>There was {claps.value} claps</div>);
}

export default DisplayClaps;
