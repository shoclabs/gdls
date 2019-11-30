import { get, orderBy } from 'lodash';

interface IWinnerAndLooserIds {
    winnerIds: string[] | [undefined];
    loserIds: string[] | [undefined];
}

interface IRound {
    score: number;
    user: { id: string };
}

export function getWinnerAndLoserIds(rounds: IRound[]): IWinnerAndLooserIds {
  const sortedRounds = orderBy(rounds, 'score', 'asc');
  if (sortedRounds.length < 2) {
    return ({
      winnerIds: [undefined],
      loserIds: [undefined],
    });
  }
  const winnerScore = get(sortedRounds, `[${sortedRounds.length - 1}].score`);
  const loserScore = get(sortedRounds, '[0].score');
  return ({
    winnerIds: rounds.filter(r => r.score === winnerScore).map(r => r.user.id),
    loserIds: rounds.filter(r => r.score === loserScore).map(r => r.user.id),
  });
}
