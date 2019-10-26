import React from 'react';
import { Image } from 'react-native';
import { Button, Content, Text, View, Input } from 'native-base';
import { css } from 'css-rn';

import { GoBackBar } from '../components/GoBackBar';
import { Checkbox } from '../components/Checkbox';

import { colors } from '../../../theme/colors';

const searchIcon = require('../assets/search-icon.png');

const descriptionStyle = css`
  margin-top: 40px;
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
  margin: 25px 0;
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
  margin-top: 40px;
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

const searchStyle = css`
  color: ${colors.darkBlue};
  margin-left: 6px;
`;

const searchIconStyle = css`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const searchContainerStyle = css`
  margin: 40px 50px 0 50px;
  border: solid 2px ${colors.darkBlue};
  border-radius: 4px;
  height: 48px;
  align-items: center;
  flex-direction: row;
`;

const checkboxStyle = css`
  margin: 50px 30px 0 30px;
`;

export const EnterOtherPointsScreen = () => (
  <Content>
    <GoBackBar />
    <View style={searchContainerStyle}>
      <Image source={searchIcon} style={searchIconStyle} />
      <Input
        style={searchStyle}
        selectionColor={colors.darkBlue}
        placeholder="Player name"
        placeholderTextColor={colors.darkBlue}
      />
    </View>
    <View style={descriptionStyle}>
      <Text style={textStyle}>ENTER OTHERS PLAYER'S</Text>
      <Text style={textStyle}>TOTAL <Text style={markedTextStyle}>STABLEFORD</Text> POINTS:</Text>
    </View>
    <View style={inputContainerStyle}>
      <Input style={inputStyle} selectionColor="white" keyboardType="numeric" />
    </View>
    <View style={checkboxStyle}>
      <Checkbox
        text="I have been authorized by other player to register his score for this week."
      />
    </View>
    <View style={buttonContainerStyle}>
      <Button style={buttonStyle}>
        <Text style={buttonTextStyle}>SUBMIT</Text>
      </Button>
    </View>
  </Content>
);
