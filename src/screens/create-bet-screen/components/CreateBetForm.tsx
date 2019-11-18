import React from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { css } from 'css-rn';

import { DatePickerInput } from '../../components/DatePickerInput';
import { Loader } from '../../components/Loader';
import { Separator } from '../../components/Separator';
import { ErrorMessage } from '../../components/ErrorMessage';

import { colors } from '../../../theme/colors';

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

export const CreateBetForm = ({ formik, loading, error }) => {
  const { values, handleSubmit, handleChange } = formik;
  return (
    <View style={containerStyle}>
      <DatePickerInput date={values.date} onChange={handleChange('date')} />
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Enter new or select existing name"
          onChangeText={handleChange('name')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Course"
          onChangeText={handleChange('course')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Amount"
          onChangeText={handleChange('amount')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Separator />
      {error && <ErrorMessage text="Unable to create new bet." />}
      <Button style={buttonStyle} onPress={handleSubmit}>
        {loading ? <Loader /> : <Text style={buttonTextStyle}>SUBMIT</Text>}
      </Button>
    </View>
  );
};
