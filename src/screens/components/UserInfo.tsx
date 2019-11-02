import React from 'react';
import { css } from 'css-rn';
import { Text, View } from 'native-base';

import { colors } from '../../theme/colors';

const avatarStyle = css`
  margin-top: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: black;
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

export const UserInfo = ({ firstName, lastName, location, description }) => {
  return (
    <>
      <View style={avatarStyle} />
      <Text style={firstNameStyle}>
        {firstName} <Text style={lastNameStyle}>{lastName}</Text>
      </Text>
      <Text style={locationStyle}>{location || 'Location not provided'}</Text>
      <Text style={descriptionStyle}>
        {description || 'Description not provided'}
      </Text>
    </>
  );
};
