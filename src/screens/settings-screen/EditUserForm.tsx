import React from 'react';
import { Platform } from 'react-native';
import { Button, Input, Item, Text, View } from 'native-base';
import { css } from 'css-rn';

import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Picker } from '../components/Picker';

import { colors } from '../../theme/colors';

const countriesData = [
  { value: 'sweden', label: 'Sweden' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'peru', label: 'Peru' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'venezuela', label: 'Venezuela' },
];

const containerStyle = css`
  margin: 0 20px;
  ${Platform.OS === 'android' ? 'height: 1000px' : ''}
`;

const inputContainerStyle = css`
  margin-top: 10px;
  border-color: ${colors.green};
  border-width: 2px;
  border-radius: 3px;
  padding: 0 10px;
`;

const inputStyle = css`
  color: ${colors.darkBlue};
  font-family: open-sans-regular;
  font-size: 14px;
`;

const labelStyle = css`
  color: ${colors.darkBlue};
  font-family: open-sans-regular;
  font-size: 14px;
  margin-top: 20px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-top: 35px;
  background-color: ${colors.green};
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
`;

export const EditUserForm = ({ formik, loading, error }) => {
  const { handleChange, values, handleSubmit } = formik;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>Email</Text>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder=""
          onChangeText={handleChange('email')}
          selectionColor={colors.darkBlue}
          value={values.email}
        />
      </Item>
      <Text style={labelStyle}>First name</Text>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder=""
          onChangeText={handleChange('firstName')}
          selectionColor={colors.darkBlue}
          value={values.firstName}
        />
      </Item>
      <Text style={labelStyle}>Last name</Text>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder=""
          onChangeText={handleChange('lastName')}
          selectionColor={colors.darkBlue}
          value={values.lastName}
        />
      </Item>
      <Picker
        items={countriesData}
        onWeekSelect={country => handleChange('location')(country)}
        initialValue={undefined}
        customSelector={
          <View>
            <Text style={labelStyle}>Country</Text>
            <Item regular style={inputContainerStyle}>
              <Input
                style={inputStyle}
                placeholder=""
                onChangeText={handleChange('location')}
                selectionColor={colors.darkBlue}
                value={values.location.toUpperCase()}
              />
            </Item>
          </View>
        }
      />
      <Text style={labelStyle}>Nickname</Text>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder=""
          onChangeText={handleChange('description')}
          selectionColor={colors.darkBlue}
          value={values.description}
        />
      </Item>
      {error && <ErrorMessage text="Unable to save changes to your profile." />}
      <Button style={buttonStyle} onPress={handleSubmit}>
        {loading ? <Loader /> : <Text style={buttonTextStyle}>SAVE</Text>}
      </Button>
    </View>
  );
};
