import React from 'react';
import { Image } from 'react-native';
import { View, Text, Button } from 'native-base';
import { css } from 'css-rn';
import moment from 'moment';

import { colors } from '../../../theme/colors';

const greyCloseIcon = require('../assets/grey-close.png');
const whiteCloseIcon = require('../assets/white-close.png');

const containerStyle = (isGrey: boolean) => css`
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${isGrey ? `background-color: ${colors.lightGrey};` : ''}
`;

const leftContentStyle = css`
  flex-direction: row;
`;

const dateStyle = css`
  width: 80px;
`;

const courseStyle = css`
  width: 140px;
`;

const amountStyle = css`
  width: 120px;
`;

const closeStyle = css`
  width: 80px;
  align-items: flex-end;
  padding-right: 20px;
`;

const textStyle = (isNegative: boolean) => css`
  text-align: center;
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${isNegative ? colors.red : colors.darkBlue};
`;

const closeIconStyle = css`
  width: 30px;
  height: 30px;
`;

export interface IBet {
  id: string;
  date: string;
  course: string;
  amount: number;
}

interface ISideBetRow {
  bet: IBet;
  index: number;
}

export const SideBetRow = ({ bet, index }: ISideBetRow) => {
  const { date, course, amount } = bet;
  const isGrey = index % 2 === 0;
  const isNegative = amount < 0;
  return (
    <View style={containerStyle(isGrey)}>
      <View style={leftContentStyle}>
        <View style={dateStyle}>
          <Text style={textStyle(false)}>{moment(date).format('DD/MM/YYYY')}</Text>
        </View>
        <View style={courseStyle}>
          <Text style={textStyle(false)}>{course}</Text>
        </View>
        <View style={amountStyle}>
          <Text style={textStyle(isNegative)}>{parseInt(amount.toFixed(2)).toLocaleString()}</Text>
        </View>
      </View>
      <View style={closeStyle}>
        <Button transparent onPress={() => {}}>
          <Image source={isGrey ? whiteCloseIcon : greyCloseIcon} style={closeIconStyle} />
        </Button>
      </View>
    </View>
  );
};
