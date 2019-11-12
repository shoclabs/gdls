import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { TouchableOpacity, Image } from 'react-native';

import { colors } from '../../../theme/colors';

const onIcon = require('../assets/checkbox-on.png');
const offIcon = require('../assets/checkbox-off.png');

const checkboxStyle = css`
  width: 30px;
  height: 30px;
`;

const containerStyle = css`
  flex-direction: row;
  align-items: center;
`;

const textStyle = css`
  padding-left: 10px;
  font-family: open-sans-bold;
  font-size: 14px;
  color: ${colors.darkBlue};
`;

export const Checkbox = ({ text, value, onChange }) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => onChange(!value)}>
        <Image source={value ? onIcon : offIcon} style={checkboxStyle} />
      </TouchableOpacity>
      {text !== '' && (
        <Text style={textStyle}>
          {text}
        </Text>)}
    </View>
  );
};
