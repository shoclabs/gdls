import React from 'react';
import { Container, Content } from 'native-base';
import { css } from 'css-rn';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../components/Loader';
import { UserInfo } from '../components/UserInfo';
import { UserStatistics } from '../components/UserStatistics';

import { colors } from '../../theme/colors';

const contentStyle = css`
  align-items: center;
`;

const QUERY_ME = gql`
  {
    me {
      id
      email
      firstName
      lastName
      location
      description
      handicap
      winCount
      finishedRoundsCount
      loseCount
      winPercentage
      losePercentage
      money
    }
  }
`;

export const MyProfileScreen = () => {
  const { data, loading, error } = useQuery(QUERY_ME);
  if (loading) {
    return (
      <Container>
        <Loader color={colors.green} />
      </Container>
    );
  }
  const { me } = data;
  return (
    <Container>
      <Content contentContainerStyle={contentStyle}>
        <UserInfo
          firstName={me.firstName}
          lastName={me.lastName}
          description={me.description}
          location={me.location}
        />
        <UserStatistics
          won={me.winCount}
          money={me.money}
          hcp={me.handicap}
          played={me.finishedRoundsCount}
          percentWon={me.winPercentage}
          percentLost={me.losePercentage}
        />
      </Content>
    </Container>
  );
};