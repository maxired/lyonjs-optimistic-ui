import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_VOTE = gql`query { vote { _id value count } } `;

const ADD_VOTE = gql`mutation { addVote { _id value count } }`;

function Index() {
  const { loading, error, data: { vote } = {} } = useQuery(GET_VOTE)
   const [addVote] = useMutation(ADD_VOTE);

  return (
    <block>
      <p>{vote !== undefined ? vote.value : 'Loading vote...'}</p>
      <p>{vote !== undefined ? vote.count : 'Loading vote...'}</p>

      <button onClick={addVote}>Add My Vote</button>
    </block>
  );
}

export default Index;
