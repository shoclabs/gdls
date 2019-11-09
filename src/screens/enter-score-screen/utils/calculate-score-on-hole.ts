import { indexList, parList } from '../consts/configuration';

export const calculateScoreOnHole = (score, holeIndex, handicap) => {
  if (score === 0 || isNaN(score)) {
    return 0;
  }
  const par = parList[holeIndex - 1];
  const index = indexList[holeIndex - 1];
  const numOfFreeShots = Math.floor(handicap / 18) + (handicap % 18 >= index ? 1 : 0);
  const totalShots = score - numOfFreeShots;
  let finalScore;
  if (par === totalShots) {
    finalScore = 2;
  } else if (par === totalShots - 1) {
    finalScore = 1;
  } else if (par < totalShots - 1) {
    finalScore = 0;
  } else {
    finalScore = par - totalShots + 2;
  }
  if (finalScore > 6) {
    finalScore = 6;
  }
  return finalScore;
};
