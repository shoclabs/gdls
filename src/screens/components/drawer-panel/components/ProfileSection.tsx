import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

const containerStyle = css`
  padding: 0 25px;
  flex-direction: row;
`;

const imageContainerStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: white;
`;

const descriptionContainerStyle = css`
  color: white;
  margin-left: 10px;
`;

const nameStyle = css`
  color: white;
  font-family: open-sans-regular;
`;

const surnameStyle = css`
  font-family: open-sans-extra-bold;
  color: white;
`;

const locationStyle = css`
  color: white;
  font-family: open-sans-condensed-bold;
`;

export const ProfileSection = () => (
  <View style={containerStyle}>
    <View style={imageContainerStyle} />
    <View style={descriptionContainerStyle}>
      <Text style={nameStyle}>
        Mauricio <Text style={surnameStyle}>Yanaculis</Text>
      </Text>
      <Text style={locationStyle}>México</Text>
    </View>
  </View>
);
