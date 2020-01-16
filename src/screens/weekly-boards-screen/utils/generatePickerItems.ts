import moment from 'moment';

import { getDateFromWeekAndYear } from './getDateFromWeekAndYear';

export function generatePickerItems(weeksData) {
  return weeksData.map(weekData => {
    const date = getDateFromWeekAndYear(weekData.weekNumber, weekData.year);
    const formatedDate = moment.utc(date).format('DD/MM/YY');
    return ({
      value: parseInt(`${weekData.year}${weekData.weekNumber}`),
      label: `Week ${weekData.weekNumber} (${formatedDate})`,
    });
  });
}
