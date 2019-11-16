import React from 'react';
import { View } from 'native-base';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { ScoreCardHeader } from './ScoreCardHeader';
import { ScoreCardBody } from './ScoreCardBody';
import { PageLoader } from '../../components/PageLoader';

const GET_ME = gql`
  {
    me {
      id
      email
      firstName
      lastName
      location
      handicap
    }
  }
`;

export const ScoreCardTable = () => {
  const { data, loading } = useQuery(GET_ME);
  if (loading) {
    return (
      <PageLoader />
    );
  }
  return (
    <View>
      <ScoreCardHeader />
      <ScoreCardBody handicap={get(data, 'me.handicap')} userId={get(data, 'me.id')} />
    </View>
  );
};
