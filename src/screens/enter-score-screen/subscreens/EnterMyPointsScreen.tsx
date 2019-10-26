import React from 'react';
import { Button, Content, Text, View, Input } from 'native-base';
import { css } from 'css-rn';

import { GoBackBar } from '../components/GoBackBar';

import { colors } from '../../../theme/colors';

const descriptionStyle = css`
  margin-top: 65px;
  align-items: center;
`;

const textStyle = css`
  font-size: 20px;
  color: ${colors.darkBlue};
  font-family: open-sans-extra-bold;
`;

const markedTextStyle = css`
  font-size: 20px;
  color: ${colors.blue};
  font-family: open-sans-extra-bold-italic;
`;

const buttonContainerStyle = css`
  padding: 0 25px;
  margin-top: 150px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${colors.green};
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
  color: white;
  font-size: 18px;
`;

const inputContainerStyle = css`
  margin-top: 70px;
  align-items: center;
`;

const inputStyle = css`
  background-color: ${colors.blue};
  border-radius: 8px;
  width: 180px;
  height: 180px;
  font-family: open-sans-extra-bold;
  font-size: 64px;
  color: white;
  text-align: center;
`;

export const EnterMyPointsScreen = () => (
  <Content>
    <GoBackBar />
      <View style={descriptionStyle}>
        <Text style={textStyle}>ENTER YOUR TOTAL</Text>
        <Text style={textStyle}><Text style={markedTextStyle}>STABLEFORD</Text> POINTS:</Text>
      </View>
      <View style={inputContainerStyle}>
        <Input style={inputStyle} selectionColor="white" keyboardType="numeric" />
      </View>
      <View style={buttonContainerStyle}>
        <Button style={buttonStyle}>
          <Text style={buttonTextStyle}>SUBMIT</Text>
        </Button>
      </View>
  </Content>
);
