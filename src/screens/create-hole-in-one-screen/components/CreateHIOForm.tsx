import React, { useState } from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { css } from 'css-rn';

import { DatePickerInput } from '../../components/DatePickerInput';
import { Separator } from '../../components/Separator';

import { colors } from '../../../theme/colors';
import { Loader } from '../../components/Loader';

const containerStyle = css`
  margin-top: 55px;
`;

const inputStyle = css`
  color: ${colors.darkBlue};
  font-family: open-sans-regular;
  font-size: 14px;
`;

const inputContainerStyle = css`
  margin: 30px 30px 0 30px;
  border-color: ${colors.green};
  border-width: 2px;
  border-radius: 3px;
  padding: 0 10px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${colors.green};
  margin: 30px 30px 0 30px;
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
`;

export const CreateHIOForm = ({ loading, formik }) => {
  const { values, handleSubmit, handleChange, errors } = formik;
  return (
    <View style={containerStyle}>
      <DatePickerInput date={values.date} onChange={handleChange('date')} />
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Course name"
          onChangeText={handleChange('courseName')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Hole number"
          onChangeText={handleChange('holeNumber')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Club"
          onChangeText={handleChange('club')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Separator />
      <Button style={buttonStyle} onPress={handleSubmit}>
        {loading ? <Loader /> : <Text style={buttonTextStyle}>Log in</Text>}
      </Button>
    </View>
  );
};
