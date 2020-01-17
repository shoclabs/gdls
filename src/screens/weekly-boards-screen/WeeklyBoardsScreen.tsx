import React, { useState } from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import moment from 'moment';

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
        avatar {
          id
          contentBase64
        }
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

  const isSaturday = moment().day() === 6;
  let defaultWeek = data.activeWeek.weekNumber - 1;
  if (isSaturday) {
    defaultWeek = data.activeWeek.weekNumber;
  }

  return (
    <View>
      <HeaderSection
        activeWeek={selectedWeek ? (parseInt(selectedWeek.toString().slice(4))) : defaultWeek}
        activeYear={data.activeWeek.year.year}
        onWeekSelect={setSelectedWeek}
      />
      <TableBody
        rounds={data.rounds}
        week={selectedWeek ? (parseInt(selectedWeek.toString().slice(4))) : defaultWeek}
        year={selectedWeek ? (parseInt(selectedWeek.toString().slice(0, 4))) : data.activeWeek.year.year}
      />
    </View>
  );
};
