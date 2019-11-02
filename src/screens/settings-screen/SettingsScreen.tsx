import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base';
import { gql } from 'apollo-boost';
import { useQuery, useMutation, getApolloContext } from '@apollo/react-hooks';
import * as yup from 'yup';
import { Formik } from 'formik';
import { css } from 'css-rn';
import { get } from 'lodash';

import { Loader } from '../components/Loader';
import { EditUserForm } from './EditUserForm';

import { colors } from '../../theme/colors';

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
    }
  }
`;

const UPDATE_USER = gql`
  mutation UPDATE_USER($firstName: String!, $lastName: String!, $description: String, $location: String!, $userId: EntityId!) {
    updateUser(input: { id: $userId, firstName: $firstName, lastName: $lastName, description: $description, location: $location }) {
      id
      firstName
      lastName
      location
      description
    }
  }
`;

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  location: yup.string().required(),
});

export const SettingsScreen = ({ history }) => {
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
  };
  const handleSubmit = async (values) => {
    const userId = await AsyncStorage.getItem('userId');
    const variables = { userId, ...values };
    updateUserMutation({ variables });
  };
  if (get(updateUserData, 'updateUser.id')) {
    client.resetStore();
  }
  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => <EditUserForm formik={formik} loading={updateUserLoading} error={updateUserError} />}
        </Formik>
      </Content>
    </Container>
  );
};
