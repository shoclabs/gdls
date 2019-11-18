import React from 'react';
import { ImageBackground } from 'react-native';
import { Text } from 'native-base';
import { css } from 'css-rn';

const backgroundImage = require('../assets/hole-in-one-background.jpg');

const containerStyle = css`
  height: 214px;
`;

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 32px;
  color: white;
  margin: 10px 0 0 17px;
`;

export const HeaderSection = ({ label }) => {
  return (
    <ImageBackground style={containerStyle} source={backgroundImage}>
      <Text style={textStyle}>{label}</Text>
    </ImageBackground>
  );
};
