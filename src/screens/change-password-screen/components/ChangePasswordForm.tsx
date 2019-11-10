import React from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { css } from 'css-rn';

import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  margin: 0 20px;
`;

const labelStyle = css`
  color: ${colors.darkBlue};
  font-family: open-sans-regular;
  font-size: 14px;
  margin-top: 20px;
`;

const inputStyle = css`
  color: ${colors.darkBlue};
  font-family: open-sans-regular;
  font-size: 14px;
`;

const inputContainerStyle = css`
  margin-top: 10px;
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
  margin-top: 35px;
  background-color: ${colors.green};
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
`;

export const ChangePasswordForm = ({ formik, error, loading }) => {
  const { handleChange, values, handleSubmit } = formik;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>New password</Text>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder=""
          onChangeText={handleChange('newPassword')}
          selectionColor={colors.darkBlue}
          value={values.newPassword}
          secureTextEntry
        />
      </Item>
      <Text style={labelStyle}>Repeat password</Text>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder=""
          onChangeText={handleChange('repeatPassword')}
          selectionColor={colors.darkBlue}
          value={values.repeatPassword}
          secureTextEntry
        />
      </Item>
      {error && <ErrorMessage text={error} />}
      <Button style={buttonStyle} onPress={handleSubmit}>
        {loading ? <Loader /> : <Text style={buttonTextStyle}>SAVE</Text>}
      </Button>
    </View>
  );
};
