import { get } from 'lodash';

export const alreadyEnteredRoundId = (rounds, activeWeekNumber) => {
  if (rounds.length === 0) {
    return undefined;
  }
  const activeRound = rounds.filter(round => get(round, 'week.weekNumber') === activeWeekNumber);
  return get(activeRound, '[0].id');
};
