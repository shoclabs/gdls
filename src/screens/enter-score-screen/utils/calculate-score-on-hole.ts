import { indexList, parList } from '../consts/configuration';

export const calculateScoreOnHole = (score, holeIndex, handicap) => {
  if (score === 0 || isNaN(score)) {
    return 0;
  }
  const par = parList[holeIndex - 1];
  const index = indexList[holeIndex - 1];
  const numOfFreeShots = Math.floor(handicap / 18) + (18 % handicap >= index ? 1 : 0);
  const totalShots = score - numOfFreeShots;
  if (par === totalShots) {
    return 2;
  } else if (par === totalShots - 1) {
    return 1;
  } else if (par < totalShots - 1) {
    return 0;
  } else {
    return par - totalShots + 2;
  }
};
