import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View } from 'react-native';
import { Input, Item, Button, Text, Spinner } from 'native-base';
import { css } from 'css-rn';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { get } from 'lodash';

import { ErrorMessage } from './ErrorMessage';

import { colors } from '../../../theme/colors';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const containerStyle = css`
  margin: 20px 30px 0 30px;
`;

const inputContainerStyle = css`
  margin-top: 30px;
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

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${colors.green};
  margin-top: 30px;
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
`;

const separatorContainerStyle = css`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

const separatorStyle = css`
  background-color: ${colors.green};
  height: 4px;
  width: 24px;
`;

const spinnerStyle = css`
  width: 30px;
  height: 30px;
`;

const LOGIN_MUTATION = gql`
  mutation LOGIN($email: String!, $password: String!) {
    emailLogin(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const LoginForm = ({ onLogin }) => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  if (get(data, 'emailLogin.token')) {
    onLogin(get(data, 'emailLogin.token'), get(data, 'emailLogin.user.id'))
  }
  return (
    <>
      {error && <ErrorMessage />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          loginMutation({ variables: values });
        }}
        render={({ values, handleSubmit, errors, handleChange }) =>  (
          <View style={containerStyle}>
            <Item regular style={inputContainerStyle}>
              <Input
                style={inputStyle}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                selectionColor={colors.darkBlue}
              />
            </Item>
            <Item regular style={inputContainerStyle}>
              <Input
                style={inputStyle}
                secureTextEntry
                placeholder="Password"
                onChangeText={handleChange('password')}
                selectionColor={colors.darkBlue}
              />
            </Item>
            <View style={separatorContainerStyle}>
              <View style={separatorStyle} />
            </View>
            <Button style={buttonStyle} onPress={handleSubmit}>
              {loading ?
                <Spinner color="white" style={spinnerStyle}/> :
                <Text style={buttonTextStyle}>Log in</Text>}
            </Button>
          </View>
        )}
      />
    </>
  );
};
