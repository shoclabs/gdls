import React from 'react';
import { ImageBackground } from 'react-native';
import { Text } from 'native-base';
import { css } from 'css-rn';
import { numberToString } from '../../../utils/number-to-string';

const backgroundImage = require('../assets/hole-in-one-background.jpg');

const containerStyle = css`
  height: 214px;
  position: relative;
`;

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 32px;
  color: white;
  margin: 10px 0 0 17px;
`;

const bottomTextStyle = css`
  position: absolute;
  left: 17px;
  bottom: 21px;
  font-size: 20px;
  font-family: open-sans-extra-bold;
  color: white;
`;

const bottomTextMarkedStyle = css`
  font-family: open-sans-regular;
  font-size: 20px;
  color: white;
`;

interface IHeaderSection {
  label: string;
  totalAmount?: number;
}

export const HeaderSection = ({ label, totalAmount }: IHeaderSection) => {
  return (
    <ImageBackground style={containerStyle} source={backgroundImage}>
      <Text style={textStyle}>{label}</Text>
      {totalAmount !== undefined && (
        <Text style={bottomTextStyle}>GRAND TOTAL:
          <Text style={bottomTextMarkedStyle}>{` $${numberToString(totalAmount)}`}</Text>
        </Text>
      )}
    </ImageBackground>
  );
};
