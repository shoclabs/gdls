import React from 'react';
import { Button, Text, View } from 'native-base';
import { css } from 'css-rn';
import moment from 'moment';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

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

const GET_ACTIVE_WEEK = gql`
  {
    activeWeek {
      id
      weekNumber
      isActive
      year {
        year
      }
    }
    weeks {
      id
      weekNumber
    }
  }
`;

export const HeaderSection = () => {
  const { loading, error, data } = useQuery(GET_ACTIVE_WEEK);
  if (loading) {
    return null;
  }
  const weekNumber = get(data, 'activeWeek.weekNumber');
  const year = get(data, 'activeWeek.year.year');
  const date = getDateFromWeekAndYear(weekNumber, year);
  const weekNumbers = data.weeks.map(week => week.weekNumber).sort();
  const items = generatePickerItems(weekNumbers, year);
  return (
    <View style={containerStyle}>
      <Text style={headerTextStyle}>WEEK {weekNumber}</Text>
      <Text style={subHeaderTextStyle}>
        {moment(date).format('MMMM DD, YYYY')}
      </Text>
      <View style={pickerStyle}>
        <Picker
          items={items}
          initialValue={weekNumber}
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
