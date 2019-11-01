import moment from 'moment';

import { getDateFromWeekAndYear } from './getDateFromWeekAndYear';

export function generatePickerItems(weeks, year) {
  return weeks.map(week => {
    const date = getDateFromWeekAndYear(week, year);
    const formatedDate = moment(date).format('DD/MM');
    return ({
      value: week,
      label: `Week ${week} (${formatedDate})`,
    });
  });
}
