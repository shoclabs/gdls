import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';

import { HIOCell } from './HIOCell';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  background-color: ${colors.lightGrey};
  padding-bottom: 20px;
  width: 100%;
`;

const headerStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  color: ${colors.darkBlue};
  text-align: center;
  margin: 20px 0;
`;

const separatorStyle = css`
  background-color: ${colors.green};
  width: 5px;
  height: 60px;
  margin: 0 20px;
`;

const contentStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HIOStatistics = ({ hioCount, hioOwed }) => {
  return (
    <View style={containerStyle}>
      <Text style={headerStyle}>HOLES-IN-ONE</Text>
      <View style={contentStyle}>
        <HIOCell value={hioCount} label="MADE" />
        <View style={separatorStyle} />
        <HIOCell value={hioOwed} label="OWED" />
      </View>
    </View>
  );
};
