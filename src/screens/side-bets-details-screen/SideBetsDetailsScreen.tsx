import React from 'react';
import { Container, Content } from 'native-base';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { GoBackBar } from '../components/GoBackBar';
import { PageLoader } from '../components/PageLoader';
import { SideBetsDetailsHeader } from './components/SideBetsDetailsHeader';
import { SideBetsDetailsTable } from './components/SideBetsDetailsTable';
import { Divider } from '../components/Divider';

const BETS_GROUP_QUERY = gql`
  query BETS_GROUP($betsGroupId: EntityId!) {
    betsGroup(id: $betsGroupId) {
      id
      name
      bets {
        id
        date
        amount
        course
        currentAdvantage
        nextAdvantage
      }
    }
  }
`;

export const SideBetsDetailsScreen = () => {
  const { sideBetsId } = useParams();
  const { data, loading } = useQuery(BETS_GROUP_QUERY, { variables: { betsGroupId: sideBetsId } });
  if (loading) {
    return (
      <Container>
        <Content>
          <PageLoader />
        </Content>
      </Container>
    );
  }
  const { betsGroup } = data;
  return (
    <>
      <GoBackBar />
      <SideBetsDetailsHeader
        name={betsGroup.name}
        balance={betsGroup.bets.reduce((sum, bet) => sum + bet.amount, 0)}
      />
      <SideBetsDetailsTable bets={betsGroup.bets} />
      <Divider height={30} />
    </>
  );
};
