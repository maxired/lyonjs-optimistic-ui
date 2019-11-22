import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loader from './Loader';

const GET_CLAPS = gql`query { claps }`;

const DisplayClaps = () => {
  const { loading, error, data: { claps } = {} } = useQuery(GET_CLAPS)

  if (loading) return <Loader />

  return (<div>There was {claps} claps</div>);
}

export default DisplayClaps;
