import React, { useState } from 'react';
import { Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { colors } from '../../theme/colors';

export const Picker = ({ customSelector, initialValue, items, onWeekSelect }) => {
  const [value, setValue] = useState(initialValue);
  const handleValueChange = value => {
    setValue(value);
    if (Platform.OS === 'android') {
      onWeekSelect(value)
    }
  };
  return (
    <RNPickerSelect
      onDonePress={() => onWeekSelect(value)}
      onValueChange={handleValueChange}
      items={items}
      value={value}
      style={{ done: { color: colors.green }}}
    >
      {customSelector}
    </RNPickerSelect>
  );
};
