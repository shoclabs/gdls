import React, { useState } from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { HeaderSection } from './components/HeaderSection';
import { BoardLoader } from './components/BoardLoader';
import { TableBody } from './components/TableBody';

const GET_ROUNDS = gql`
  {
    rounds {
      id
      score
      user {
        id
        firstName
        lastName
      }
      week {
        id
        weekNumber
        year {
          id
          year
        }
      }
    }
    activeWeek {
      id
      weekNumber
      isActive
      year {
        id
        year
      }
    }
  }
`;

export const WeeklyBoardsScreen = () => {
  const [selectedWeek, setSelectedWeek] = useState();
  const { data, loading, error } = useQuery(GET_ROUNDS, { fetchPolicy: 'network-only' } );
  if (loading || !data) {
    return <BoardLoader />;
  }

  return (
    <View>
      <HeaderSection
        activeWeek={selectedWeek || data.activeWeek.weekNumber}
        activeYear={data.activeWeek.year.year}
        onWeekSelect={setSelectedWeek}
      />
      <TableBody
        rounds={data.rounds}
        week={selectedWeek || data.activeWeek.weekNumber}
      />
    </View>
  );
};
