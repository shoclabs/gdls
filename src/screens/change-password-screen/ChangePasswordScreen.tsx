import React, { useState } from 'react';
import { Formik } from 'formik';
import { get } from 'lodash';
import { Container, Content } from 'native-base';
import * as yup from 'yup';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-native';

import { ChangePasswordForm } from './components/ChangePasswordForm';
import { authStore } from '../../stores/auth-store';

const UPDATE_PASSWORD = gql`
  mutation UPDATE_PASSWORD($id: EntityId!, $password: String!) {
    updateUser(input: { id: $id, password: $password }) {
      id
    }
  }
`;

const initialValues = {
  newPassword: '',
  repeatPassword: '',
};

const validationSchema = yup.object().shape({
  newPassword: yup.string().required(),
  repeatPassword: yup.string().required(),
});

export const ChangePasswordScreen = withRouter(({ history }) => {
  const [error, setError] = useState(undefined);
  const [updatePasswordMutation, { loading }] = useMutation(UPDATE_PASSWORD);
  const handleSubmit = async ({ newPassword, repeatPassword }) => {
    if (newPassword !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
    setError(undefined);
    const { userId: id } = authStore;
    const result = await updatePasswordMutation({ variables: { id, password: newPassword } });
    if (get(result, 'data.updateUser.id')) {
      history.push('/my-profile');
      return;
    }
    setError('Unable to change your password');
  };
  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => <ChangePasswordForm formik={formik} error={error} loading={loading} />}
        </Formik>
      </Content>
    </Container>
  );
});
