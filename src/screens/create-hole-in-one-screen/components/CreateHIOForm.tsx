import React from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { css } from 'css-rn';
import { filter, get } from 'lodash';

import { DatePickerInput } from '../../components/DatePickerInput';
import { Separator } from '../../components/Separator';

import { colors } from '../../../theme/colors';
import { Loader } from '../../components/Loader';
import { Picker } from '../../components/Picker';
import { ErrorMessage } from '../../components/ErrorMessage';

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

export const CreateHIOForm = ({ loading, formik, clubsData, error }) => {
  const { values, handleSubmit, handleChange } = formik;
  const pickerData = clubsData.map(({ id, name }) => ({ value: id, label: name }));
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
          keyboardType="numeric"
        />
      </Item>
      <Picker
        items={pickerData}
        onWeekSelect={clubId => handleChange('club')(clubId)}
        initialValue={undefined}
        customSelector={
          <Item regular style={inputContainerStyle}>
            <Input
              style={inputStyle}
              placeholder="Club"
              selectionColor={colors.darkBlue}
              placeholderTextColor={colors.darkBlue}
              value={get(filter(pickerData, data => data.value === values.club), '[0].label') || ''}
            />
          </Item>
        }
      />
      <Separator />
      {error && <ErrorMessage text="Unable to create new hole in One." />}
      <Button style={buttonStyle} onPress={handleSubmit}>
        {loading ? <Loader /> : <Text style={buttonTextStyle}>Log in</Text>}
      </Button>
    </View>
  );
};
