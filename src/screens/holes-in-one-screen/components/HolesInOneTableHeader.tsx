import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  flex-direction: row;
  justify-content: space-between;
`;

const leftContentStyle = css`
  width: 154px;
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

const rightContentStyle = css`
  width: 107px;
  height: 60px;
  justify-content: center;
`;

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
`;

const hioStyle = css`
  margin-left: 23px;
`;

const playerStyle = css`
  margin-left: 63px;
`;

export const HolesInOneTableHeader = () => {
  return (
    <View style={containerStyle}>
      <View style={leftContentStyle}>
        <Text style={[textStyle, hioStyle]}>HIO</Text>
        <Text style={[textStyle, playerStyle]}>PLAYER</Text>
      </View>
      <View style={rightContentStyle}>
        <Text style={textStyle}>EARNINGS</Text>
      </View>
    </View>
  );
};
