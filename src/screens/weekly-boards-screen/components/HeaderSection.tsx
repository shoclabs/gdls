import React from 'react';
import { Button, Text, View } from 'native-base';
import { css } from 'css-rn';
import moment from 'moment';

import { getDateFromWeekAndYear } from '../utils/getDateFromWeekAndYear';
import { colors } from '../../../theme/colors';

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
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: white;
`;

export const HeaderSection = () => {
  const weekNumber = moment().isoWeeks();
  const year = moment().year();
  const date = getDateFromWeekAndYear(weekNumber, year);
  return (
    <View style={containerStyle}>
      <Text style={headerTextStyle}>WEEK {weekNumber}</Text>
      <Text style={subHeaderTextStyle}>
        {moment(date).format('MMMM DD, YYYY')}
      </Text>
      <Button style={buttonStyle}>
        <Text style={buttonTextStyle}>PREVIOUS WEEKS</Text>
      </Button>
    </View>
  );
};
