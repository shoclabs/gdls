import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { BetRow } from './BetRow';
import { PageLoader } from '../../components/PageLoader';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const leftContentStyle = css`
  display: flex;
  align-items: flex-start;
  padding-left: 25px;
  width: 150px;
`;

const rightContentStyle = css`
  display: flex;
  align-items: flex-start;
  width: 200px;
`;

const headerStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
`;

const MY_BETS_QUERY = gql`
  {
    me {
      id
      betsGroups {
        id
        name
        bets {
          id
          amount
        }
      }
    }
  }
`;

export const BetsTable = () => {
  const { data, loading } = useQuery(MY_BETS_QUERY);
  if (loading) {
    return <PageLoader />
  }
  return (
    <>
      <View style={containerStyle}>
        <View style={leftContentStyle}>
          <Text style={headerStyle}>PLAYER</Text>
        </View>
        <View style={rightContentStyle}>
          <Text style={headerStyle}>TOTAL</Text>
        </View>
      </View>
      {data.me.betsGroups.map(({ id, name, bets }, index) => (
        <BetRow
          key={id}
          betGroup={{ id, name, amount: bets.reduce((sum, bet) => sum + bet.amount, 0) }}
          index={index}
        />
      ))}
    </>
  );
};
