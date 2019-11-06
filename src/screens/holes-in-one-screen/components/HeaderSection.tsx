import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

const containerStyle = css`
  background-color: black;
  height: 214px;
`;

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 32px;
  color: white;
  margin: 10px 0 0 17px;
`;

export const HeaderSection = () => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>HOLES-IN-ONE</Text>
    </View>
  );
};
