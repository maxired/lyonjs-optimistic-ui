import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_DATE = gql`{ date } `;

function Index() {
  const { loading, error, data: { date } = {} } = useQuery(GET_DATE)

  // if (loading) return <p>Loading ...</p>;

  return (
    <main>
      <h1>Gatsby + Node.js (TypeScript) API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <br />
      <p>The date according to Node.js (TypeScript) is:</p>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
