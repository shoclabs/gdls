import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { css } from 'css-rn';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { sortBy, get } from 'lodash';

import { TableHeader } from '../../components/TableHeader';
import { TableRow } from './TableRow';
import { Loader } from '../../components/Loader';

import { colors } from '../../../theme/colors';
import { userFieldResolver } from '../consts/user-field-resolver';
import { getWinnerAndLoserIds } from '../utils/get-winner-and-loser-ids';

const headers = ['HCP', 'Pts Avg', 'Played', 'Won', 'MP', '% Won', '% MP', 'Money'];

const containerStyle = css`
  flex-direction: row; 
`;

const leftContentStyle = css`
  width: 200px;
`;

const contentStyle = css`
  flex-direction: column;
`;

const loaderStyle = css`
  align-items: center;
  margin-top: 20px;
`;

const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      finishedRoundsCount
      winCount
      loseCount
      winPercentage
      losePercentage
      handicap
      money
      description
      location
      averageScore
      avatar {
        id
        contentBase64
      }
    }
    lastRoundsWeek {
      id
      rounds {
        id
        user {
          id
        }
        score
      }
    }
  }
`;

export const TableSection = () => {
  const { data, loading, error } = useQuery(GET_USERS, { fetchPolicy: 'network-only' });
  const [selectedHeader, setSelected] = useState('Pts Avg');
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');
  const handleSelectHeader = (header: string) => {
    if (header === selectedHeader) {
      setOrder(order === 'desc' ? 'asc' : 'desc');
      return;
    }
    setSelected(header);
    setOrder('desc');
  };
  if (loading) {
    return (
      <View style={loaderStyle}>
        <Loader color={colors.darkBlue} />
      </View>
    )
  }
  const { winnerIds, loserIds } = getWinnerAndLoserIds(data.lastRoundsWeek.rounds);
  const userFieldToFilter = userFieldResolver[selectedHeader];
  const sortedUsers = sortBy(data.users, [userFieldToFilter, 'firstName', 'lastName']);
  const orderedUsers = order === 'desc' ? sortedUsers.reverse() : sortedUsers;
  const filteredUsers = orderedUsers.filter(user => user.id !== '1');
  return (
    <View style={containerStyle}>
      <View style={leftContentStyle}>
        <TableHeader
          headers={[]}
          removeRank
        />
        {filteredUsers.map((user, index) => (
          <TableRow
            key={user.id}
            rank={index + 1}
            avatar={user.avatar}
            firstName={user.firstName.toUpperCase()}
            lastName={user.lastName.toUpperCase()}
            isWinner={winnerIds.includes(user.id)}
            isLooser={loserIds.includes(user.id)}
            location={user.location}
            played={user.finishedRoundsCount}
            won={user.winCount}
            lost={user.loseCount}
            percentWon={user.winPercentage}
            percentLost={user.losePercentage}
            money={user.money}
            hcp={user.handicap}
            description={user.description}
            disableRightContent
            averageScore={user.averageScore}
          />
        ))}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={contentStyle}>
          <TableHeader
            headers={headers}
            removeRank
            selectedHeader={selectedHeader}
            onSelectHeader={handleSelectHeader}
            removeLeftContent
          />
          {filteredUsers.map((user, index) => (
            <TableRow
              key={user.id}
              rank={index + 1}
              played={user.finishedRoundsCount}
              won={user.winCount}
              lost={user.loseCount}
              percentWon={user.winPercentage}
              percentLost={user.losePercentage}
              money={user.money}
              hcp={user.handicap}
              location={user.location}
              description={user.description}
              averageScore={user.averageScore}
              disableLeftContent
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
