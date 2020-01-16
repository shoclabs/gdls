import React from 'react';
import { Container } from 'native-base';
import { gql } from 'apollo-boost';
import { useQuery, useMutation, getApolloContext } from '@apollo/react-hooks';
import * as yup from 'yup';
import { Formik } from 'formik';
import { css } from 'css-rn';
import { get } from 'lodash';
import { observer } from 'mobx-react';

import { EditUserForm } from './EditUserForm';
import { Loader } from '../components/Loader';

import { colors } from '../../theme/colors';
import { authStore } from '../../stores/auth-store';

const loaderStyle = css`
  align-items: center;
  margin-top: 30px;
`;

const QUERY_ME = gql`
  {
    me {
      id
      firstName
      lastName
      location
      description
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation UPDATE_USER($firstName: String!, $lastName: String!, $description: String, $location: String!, $userId: EntityId!, $email: String!) {
    updateUser(input: { id: $userId, firstName: $firstName, lastName: $lastName, description: $description, location: $location, email: $email }) {
      id
      firstName
      lastName
      location
      description
      email
    }
  }
`;

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  location: yup.string().required(),
  email: yup.string().required(),
});

export const SettingsScreen = observer(({ history }) => {
  const { data, loading, error } = useQuery(QUERY_ME);
  const [
    updateUserMutation,
    { data: updateUserData, loading: updateUserLoading, error: updateUserError },
  ] = useMutation(UPDATE_USER);
  const { client } = React.useContext(getApolloContext());
  if (loading) {
    return <Container style={loaderStyle}><Loader color={colors.green} /></Container>;
  }
  const { me } = data;
  const initialValues = {
    firstName: me.firstName,
    lastName: me.lastName,
    description: me.description,
    location: me.location,
    email: me.email,
  };
  const handleSubmit = async (values) => {
    const { userId } = authStore;
    const variables = { userId, ...values };
    const result = await updateUserMutation({ variables });
    if (get(result, 'data.updateUser.id')) {
      await client.resetStore();
      history.push('/my-profile');
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => <EditUserForm formik={formik} loading={updateUserLoading} error={updateUserError} />}
    </Formik>
  );
});
