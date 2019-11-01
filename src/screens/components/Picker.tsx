import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';

export const Picker = ({ customSelector, initialValue, items }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <RNPickerSelect
      onDonePress={() => console.log(value)}
      onValueChange={value => setValue(value)}
      items={items}
      value={value}
      style={{ done: { color: colors.green }}}
    >
      {customSelector}
    </RNPickerSelect>
  );
};
