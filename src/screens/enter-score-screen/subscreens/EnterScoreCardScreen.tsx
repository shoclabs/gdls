import React from 'react';
import { Content, Text, View } from 'native-base';
import { css } from 'css-rn';

import { ScoreCardTable } from '../components/ScoreCardTable';
import { GoBackBar } from '../components/GoBackBar';

import { colors } from '../../../theme/colors';

const descriptionStyle = css`
  margin-top: 17px;
`;

const descriptionTextStyle = css`
  font-size: 20px;
  text-align: center;
  font-family: open-sans-extra-bold;
  color: ${colors.darkBlue};
`;

export const EnterScoreCardScreen = () => (
  <Content>
    <GoBackBar />
    <View style={descriptionStyle}>
      <Text style={descriptionTextStyle}>ENTER STROKES</Text>
      <Text style={descriptionTextStyle}>PER HOLE PLAYED:</Text>
    </View>
    <ScoreCardTable />
  </Content>
);
