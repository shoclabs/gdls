import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import moment from 'moment';

const containerStyle = css`
  height: 214px;
  background-color: black;
  position: relative;
`;

const titleStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 32px;
  text-align: center;
  left: 17px;
  top: 10px;
  position: absolute;
  color: white;
`;

const imageStyle = css`
  height: 214px;
`;

const placeholderStyle = css`
  height: 214px;
  background-color: black;
`;

interface  IHeaderSection {
  imageUrl?: ImageSourcePropType;
}

export const HeaderSection = ({ imageUrl }: IHeaderSection) => (
  <View style={containerStyle}>
    {imageUrl ?
      <Image style={imageStyle} source={imageUrl} /> :
      <View style={placeholderStyle} />}
    <Text style={titleStyle}>WEEK {moment().weeks()}</Text>
  </View>
);
