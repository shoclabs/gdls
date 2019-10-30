export const getDateFromWeekAndYear = (week, year) => {
  const d = (5 + (week - 1) * 7);
  return new Date(year, 0, d);
};
