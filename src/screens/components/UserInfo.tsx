import React from 'react';
import { css } from 'css-rn';
import { Image } from 'react-native';
import { Text } from 'native-base';

import { colors } from '../../theme/colors';
import { countryIconResolver } from './resolvers/country-icon-resolver';

const avatarPlaceholderIcon = require('./icons/avatar-placeholder5x.png');

const avatarStyle = css`
  margin-top: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const firstNameStyle = css`
  font-family: open-sans-regular;
  font-size: 24px;
  text-align: center;
  margin-top: 35px;
  color: ${colors.darkBlue};
`;

const locationStyle = css`
  font-family: open-sans-regular;
  font-size: 10px;
  color: ${colors.darkBlue};
  margin-top: 3px;
`;

const descriptionStyle = css`
  font-family: open-sans-regular;
  font-size: 14px;
  color: ${colors.darkBlue};
  text-align: center;
  margin-top: 33px;
`;

const lastNameStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 24px;
  color: ${colors.darkBlue};
`;

const flagStyle = css`
  width: 25px;
  height: 25px;
  margin-top: 5px;
`;

interface IUserInfo {
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  hideImage?: boolean;
  avatarBase64?: string;
}

export const UserInfo = ({ firstName, lastName, location, description, hideImage, avatarBase64 }: IUserInfo) => {
  return (
    <>
      {!hideImage &&
        <Image
          style={avatarStyle}
          source={avatarBase64 ? { uri: `data:image/png;base64,${avatarBase64}` } : avatarPlaceholderIcon}
        />}
      <Text style={firstNameStyle}>
        {firstName} <Text style={lastNameStyle}>{lastName}</Text>
      </Text>
      {countryIconResolver[location.toLowerCase()] ?
        <Image source={countryIconResolver[location.toLowerCase()]} style={flagStyle} /> :
        <Text style={locationStyle}>{location || 'Location not provided'}</Text>}
      <Text style={descriptionStyle}>
        {description || 'Description not provided'}
      </Text>
    </>
  );
};
