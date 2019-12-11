import React from 'react';
import { Container, Content } from 'native-base';
import { css } from 'css-rn';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { UserInfo } from '../components/UserInfo';
import { UserStatistics } from '../components/UserStatistics';
import { AvatarPicker } from './components/AvatarPicker';
import { PageLoader } from '../components/PageLoader';

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
      averageScore
      money
      holesInOne {
        id
      }
      paymentObligations {
        id
        didPay
      }
      avatar {
        id
        contentBase64
      }
    }
  }
`;

export const MyProfileScreen = () => {
  const { data, loading, error } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });
  if (!data) {
    return <PageLoader />;
  }

  const { me } = data;
  const owedPaymentObligations = me.paymentObligations.filter(item => !item.didPay);
  return (
    <Container>
      <Content contentContainerStyle={contentStyle}>
        <AvatarPicker avatar={me.avatar} />
        <UserInfo
          firstName={me.firstName}
          lastName={me.lastName}
          description={me.description}
          location={me.location}
          hideImage
        />
        <UserStatistics
          won={me.winCount}
          money={me.money}
          hcp={me.handicap}
          played={me.finishedRoundsCount}
          percentWon={me.winPercentage}
          percentLost={me.losePercentage}
          averageScore={me.averageScore}
          loseCount={me.loseCount}
          hioCount={me.holesInOne.length}
          hioOwed={owedPaymentObligations.length}
        />
      </Content>
    </Container>
  );
};
