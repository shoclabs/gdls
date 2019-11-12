import React from 'react';
import { get, sortBy } from 'lodash';

import { TableHeader } from '../../components/TableHeader';
import { TableRow } from './TableRow';

const headers = ['Score'];

export const TableBody = ({ rounds, week }) => {
  const filteredRounds = rounds.filter(round => get(round, 'week.weekNumber') === week);
  const sortedRounds = sortBy(filteredRounds, ['score', 'user.firstName', 'user.lastName']).reverse();
  return (
    <>
      <TableHeader headers={headers} />
      {sortedRounds.map((round, index) => {
        const { user: { firstName, lastName, avatar }, score , id } = round;
        return (
          <TableRow
            key={id}
            fullName={`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
            isWinner={index === 0}
            isLooser={index === sortedRounds.length - 1}
            rank={index + 1}
            score={score}
            avatar={avatar}
          />
        );
      })}
    </>
  );
};
