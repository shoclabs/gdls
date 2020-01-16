import React from 'react';
import { get, sortBy } from 'lodash';

import { TableHeader } from '../../components/TableHeader';
import { TableRow } from './TableRow';

const headers = ['Score'];

export const TableBody = ({ rounds, week, year }) => {
  const roundIsSelected = round =>
    get(round, 'week.weekNumber') === week && get(round, 'week.year.year') === year;
  const filteredRounds = rounds.filter(roundIsSelected);
  const sortedRounds = sortBy(filteredRounds, ['score', 'user.firstName', 'user.lastName']).reverse();
  const winnerScore = get(sortedRounds, '[0].score');
  const loserScore = get(sortedRounds, `[${get(sortedRounds, 'length') - 1}].score`);
  return (
    <>
      <TableHeader headers={headers} />
      {sortedRounds.map((round, index) => {
        const { user: { firstName, lastName, avatar }, score , id } = round;
        return (
          <TableRow
            key={id}
            fullName={`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
            isWinner={index === 0 || winnerScore === round.score}
            isLooser={index === sortedRounds.length - 1 || loserScore === round.score}
            rank={index + 1}
            score={score}
            avatar={avatar}
          />
        );
      })}
    </>
  );
};
