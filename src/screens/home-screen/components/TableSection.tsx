import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { css } from 'css-rn';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { sortBy } from 'lodash';

import { TableHeader } from '../../components/TableHeader';
import { TableRow } from './TableRow';
import { Loader } from '../../components/Loader';

import { colors } from '../../../theme/colors';
import { userFieldResolver } from '../consts/user-field-resolver';

const headers = ['Played', 'Won', 'Lost', '% Won', '% Lost', 'HCP', 'Money'];

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
    }
  }
`;

export const TableSection = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  const [selectedHeader, setSelected] = useState('Won');
  if (loading) {
    return (
      <View style={loaderStyle}>
        <Loader color={colors.darkBlue} />
      </View>
    )
  }
  const userFieldToFilter = userFieldResolver[selectedHeader];
  const sortedUsers = sortBy(data.users, [userFieldToFilter, 'firstName', 'lastName']).reverse();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={contentStyle}>
        <TableHeader
          headers={headers}
          removeRank
          selectedHeader={selectedHeader}
          onSelectHeader={setSelected}
        />
        {sortedUsers.map((user, index) => (
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
            fullName={`${user.firstName} ${user.lastName}`}
            isWinner={index === 0}
            isLooser={sortedUsers.length === index + 1}
          />
        ))}
      </View>
    </ScrollView>
  );
};
