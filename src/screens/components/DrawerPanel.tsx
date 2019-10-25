import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';

const containerStyle = css`
  background-color: ${colors.darkBlue};
`;

const contentStyle = css`
  flex: 1;
  top: -1px;
`;

export const DrawerPanel = () => (
  <Container style={containerStyle}>
    <Content
      bounces={false}
      style={contentStyle}
    >
      <View><Text>TEST 1</Text></View>
      <View><Text>TEST 1</Text></View>
      <View><Text>TEST 1</Text></View>
      <View><Text>TEST 1</Text></View>
    </Content>
  </Container>
);
