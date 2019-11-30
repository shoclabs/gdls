import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { RouteComponentProps, withRouter } from 'react-router-native';

import { colors } from '../../../theme/colors';

const moneyIcon = require('../../components/icons/money.png');
const nextIcon = require('../../components/icons/next.png');
const peopleIcon = require('../../components/icons/people.png');

const containerStyle = notPaid => css`
  height: 130px;
  background-color: ${notPaid ? colors.red : colors.blue};
  border-radius: 10px;
  margin: 0 30px 20px 30px;
  overflow: hidden;
`;

const topContentStyle = css`
  height: 95px;
`;

const bottomContentStyle = (notPaid) => css`
  height: 35px;
  background-color: ${notPaid ? colors.darkRed : colors.darkBlue};
  flex-direction: row;
  padding-left: 15px;
  justify-content: space-between;
`;

const dateContainerStyle = css`
  align-items: flex-end;
  padding: 8px 11px 0 0;
`;

const dateStyle = css`
  font-family: open-sans-bold;
  color: white;
  font-size: 16px;
`;

const infoTextStyle = css`
  font-size: 14px;
  font-family: open-sans-regular;
  color: white;
  margin-left: 14px;
`;

const yardageTextStyle = css`
  font-size: 14px;
  font-family: open-sans-regular;
  color: white;
  padding-left: 32px;
`;

const descriptionAndYardageStyle = css`
  display: flex;
  flex-direction: row;
`;

const leftBottomStyle = css`
  flex-direction: row;
  align-items: center;
`;

const rightBottomStyle = css`
  justify-content: center;
  margin-right: 15px;
`;

const peopleIconStyle = css`
  width: 20px;
  height: 22px;
`;

const bottomTextStyle = css`
  font-family: open-sans-bold;
  color: white;
  font-size: 14px;
  padding-left: 8px;
`;

const moneyIconStyle = css`
  width: 20px;
  height: 22px;
  margin-left: 30px;
`;

const nextIconStyle = css`
  width: 20px;
  height: 22px;
`;

interface IHeaderProps extends RouteComponentProps<any>{
  holeId: string;
  date: string;
  courseName: string;
  holeNumber: number;
  description: string;
  numberOfPeoplePaid: number;
  money: number;
  disabled: boolean;
  paid: boolean;
  notPaid: boolean;
  yardage: number;
}

export const HoleInOne = withRouter<IHeaderProps, any>((props) => {
  const { date, history, holeNumber, description, numberOfPeoplePaid, money } = props;
  const {courseName, holeId, disabled, paid, notPaid, yardage } = props;
  return (
    <TouchableOpacity style={containerStyle(notPaid)} onPress={() => history.push(`/hole-in-one/${holeId}`)} disabled={disabled}>
      <View style={topContentStyle}>
        <View style={dateContainerStyle}>
          <Text style={dateStyle}>{date}</Text>
        </View>
        <Text style={infoTextStyle}>{courseName}</Text>
        <Text style={infoTextStyle}>HOLE {holeNumber}</Text>
          <View style={descriptionAndYardageStyle}>
            <Text style={infoTextStyle}>{description}</Text>
            <Text style={yardageTextStyle}>{yardage} YDS</Text>
          </View>
      </View>
      <View style={bottomContentStyle(notPaid)}>
        <View style={leftBottomStyle}>
          <Image style={peopleIconStyle} source={peopleIcon} />
          <Text style={bottomTextStyle}>{numberOfPeoplePaid}</Text>
          <Image style={moneyIconStyle} source={moneyIcon} />
          <Text style={bottomTextStyle}>{money}</Text>
        </View>
        {!disabled && (
          <View style={rightBottomStyle}>
            <Image style={nextIconStyle} source={nextIcon} />
          </View>
        )}
        {(notPaid || paid) && (
          <View style={rightBottomStyle}>
            <Text style={bottomTextStyle}>{notPaid ? 'Not paid' : 'Paid'}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
});
