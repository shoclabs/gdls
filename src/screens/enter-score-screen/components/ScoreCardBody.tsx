import React from 'react';
import { range } from 'lodash';
import { ImageBackground } from 'react-native';
import { Input, Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const redFlagIcon = require('../assets/flag-red.png');
const greenFlagIcon = require('../assets/flag-green.png');

const rowStyle = isGrey => css`
  flex-direction: row;
  height: 52px;
  background-color: ${isGrey ? colors.lightGrey : 'white'};
  align-items: center;
`;

const cellStyle = css`
  flex: 1;
  align-items: center;
  height: 32px;
`;

const flagCellStyle = css`
  flex: 1;
  align-items: center;
  height: 35px;
`;

const inputStyle = css`
  width: 32px;
  height: 32px;
  border: solid 1px ${colors.grey};
  font-family: open-sans-bold;
  font-size: 16px;
  color: ${colors.darkBlue};
  text-align: center;
`;

const disabledInputStyle = css`
  background-color: ${colors.lightGrey};
  color: ${colors.grey};
`;

const flagIconStyle = isLeftSide => css`
  width: 35px;
  height: 35px;
  padding-left: ${isLeftSide ? '5' : '2'}px;
  justify-content: center;
`;

const flagTextStyle = css`
   font-family: open-sans-condensed-bold;
   font-size: 16px;
   color: white;
`;

export const ScoreCardBody = () => {
  return (
    <>
      {range(1, 10).map(i => (
        <View style={rowStyle(i % 2 == 1)} key={i}>
          <View style={flagCellStyle}>
            <ImageBackground
              source={i % 2 === 1 ? redFlagIcon : greenFlagIcon}
              style={flagIconStyle(true)}
            >
              <Text style={flagTextStyle}>{i}</Text>
            </ImageBackground>
          </View>
          <View style={cellStyle}>
            <Input style={inputStyle} selectionColor={colors.darkBlue} />
          </View>
          <View style={cellStyle}>
            <Input style={[inputStyle, disabledInputStyle]} disabled value="5" />
          </View>
          <View style={flagCellStyle}>
            <ImageBackground
              source={i % 2 === 1 ? greenFlagIcon : redFlagIcon}
              style={flagIconStyle(false)}
            >
              <Text style={flagTextStyle}>{i + 9}</Text>
            </ImageBackground>
          </View>
          <View style={cellStyle}>
            <Input style={inputStyle} selectionColor={colors.darkBlue} />
          </View>
          <View style={cellStyle}>
            <Input style={[inputStyle, disabledInputStyle]} disabled value="5" />
          </View>
        </View>
      ))}
    </>
  );
};
