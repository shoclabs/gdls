import React, { useEffect } from 'react';
import { Button, Text, View } from 'native-base';
import { css } from 'css-rn';
import moment from 'moment';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { sortBy, get } from 'lodash';

import { Picker } from '../../components/Picker';

import { getDateFromWeekAndYear } from '../utils/getDateFromWeekAndYear';
import { colors } from '../../../theme/colors';
import { generatePickerItems } from '../utils/generatePickerItems';

const containerStyle = css`
  background-color: black;
  height: 138px;
  align-items: center;
`;

const headerTextStyle = css`
  color: white;
  font-family: open-sans-extra-bold;
  font-size: 27px;
  margin-top: 13px;
`;

const subHeaderTextStyle = css`
  color: white;
  font-family: open-sans-extra-bold;
  font-size: 12px;
  text-transform: uppercase;
`;

const buttonStyle = css`
  margin-top: 12px;
  background-color: ${colors.green};
  height: 40px;
  width: 160px;
  align-items: center;
  justify-content: center;
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: white;
`;

const pickerStyle = css`
  align-items: center;
`;

const GET_WEEKS = gql`
  {
    weeks {
      id
      weekNumber
      year {
        id
        year
      }
    }
  }
`;

export const HeaderSection = ({ activeWeek, activeYear, onWeekSelect }) => {
  const { loading, error, data } = useQuery(GET_WEEKS);
  if (loading) {
    return null;
  }
  const date = getDateFromWeekAndYear(activeWeek, activeYear);
  const weeksData = sortBy(
    data.weeks.map(week => ({ weekNumber: week.weekNumber, year: week.year.year })),
    ['year', 'weekNumber'], 'desc').reverse();
  const items = generatePickerItems(weeksData);
  return (
    <View style={containerStyle}>
      <Text style={headerTextStyle}>WEEK {activeWeek}</Text>
      <Text style={subHeaderTextStyle}>
        {moment.utc(date).format('MMMM DD, YYYY')}
      </Text>
      <View style={pickerStyle}>
        <Picker
          items={items}
          initialValue={parseInt(`${activeYear}${activeWeek}`)}
          onWeekSelect={onWeekSelect}
          customSelector={
            <Button style={buttonStyle}>
              <Text style={buttonTextStyle}>PREVIOUS WEEKS</Text>
            </Button>
          }
        />
      </View>
    </View>
  );
};
