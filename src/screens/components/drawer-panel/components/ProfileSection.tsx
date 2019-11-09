import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { get } from 'lodash';

const profileImagePlaceholder = require('../../icons/avatar-placeholder5x.png');

const containerStyle = css`
  padding: 0 25px;
  flex-direction: row;
`;

const imageContainerStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
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

export const ProfileSection = ({ user }) => (
  <View style={containerStyle}>
    <Image style={imageContainerStyle} source={profileImagePlaceholder} />
    <View style={descriptionContainerStyle}>
      <Text style={nameStyle}>
        {get(user, 'firstName')} <Text style={surnameStyle}>{get(user, 'lastName')}</Text>
      </Text>
      <Text style={locationStyle}>{get(user, 'location') || 'Location not provided'}</Text>
    </View>
  </View>
);
