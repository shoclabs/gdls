import { get, orderBy } from 'lodash';

interface IWinnerAndLooserIds {
    winnerId: string | undefined;
    loserId: string | undefined;
}

interface IRound {
    score: number;
    user: { id: string };
}

export function getWinnerAndLoserIds(rounds: IRound[]): IWinnerAndLooserIds {
  const sortedRounds = orderBy(rounds, 'score', 'asc');
  if (sortedRounds.length < 2) {
    return ({
      winnerId: undefined,
      loserId: undefined,
    });
  }
  return ({
    winnerId: get(sortedRounds, `[${sortedRounds.length - 1}].user.id`),
    loserId: get(sortedRounds, '[0].user.id'),
  });
}
