import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { get } from 'lodash';

import { countryIconResolver } from '../../resolvers/country-icon-resolver';

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

const flagStyle = css`
  width: 25px;
  height: 25px;
  margin-top: 5px;
`;

export const ProfileSection = ({ user }) => (
  <View style={containerStyle}>
    <Image style={imageContainerStyle} source={profileImagePlaceholder} />
    <View style={descriptionContainerStyle}>
      <Text style={nameStyle}>
        {get(user, 'firstName')} <Text style={surnameStyle}>{get(user, 'lastName')}</Text>
      </Text>
      {get(user, 'location') && countryIconResolver[user.location.toLowerCase()] ?
        <Image source={countryIconResolver[user.location.toLowerCase()]} style={flagStyle} /> :
        <Text style={locationStyle}>
          {get(user, 'location') || 'Location not provided'}
        </Text>}
    </View>
  </View>
);
