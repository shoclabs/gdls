import React from 'react';
import { View } from 'native-base';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { ScoreCardHeader } from './ScoreCardHeader';
import { ScoreCardBody } from './ScoreCardBody';

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
  const { data } = useQuery(GET_ME);
  return (
    <View>
      <ScoreCardHeader />
      <ScoreCardBody handicap={get(data, 'me.handicap')} />
    </View>
  );
};
