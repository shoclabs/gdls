import React from 'react';
import { Platform, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { getApolloContext, useMutation, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-native';
import { css } from 'css-rn';
import moment from 'moment';

import { GoBackBar } from '../components/GoBackBar';
import { CreateHIOHeaderSection } from './components/CreateHIOHeaderSection';
import { CreateHIOForm } from './components/CreateHIOForm';
import { PageLoader } from '../components/PageLoader';
import { Divider } from '../components/Divider';

const containerStyle = css`
  ${Platform.OS === 'android' ? 'height: 1050px' : ''}
`;

const initialValues = {
  date: '',
  courseName: '',
  holeNumber: '',
  club: '',
  yardage: '',
};

const validationSchema = yup.object().shape({
  date: yup.string().required(),
  courseName: yup.string().required(),
  holeNumber: yup.string().required(),
  yardage: yup.string().required(),
  club: yup.string().required(),
});

const CLUBS_QUERY = gql`
  {
    clubs {
      id
      name
    }
  }
`;

const CREATE_CLUB_MUTATION = gql`
  mutation CREATE_CLUB($date: DateTime!, $courseName: String!, $holeNumber: Float!, $club: EntityId!, $yardage: Float!) {
    createHoleInOne(input: { date: $date, courseName: $courseName, holeNumber: $holeNumber, yardage: $yardage, club: { id: $club } }) {
      id
      date
      courseName
      holeNumber
      club {
        id
      }
      winner {
        id
        email
      }
    }
  }
`;

export const CreateHoleInOneScreen = withRouter(({ history }) => {
  const { data: clubsData, loading } = useQuery(CLUBS_QUERY);
  const [createClubMutation, { loading: loadingCreateClub, error }] = useMutation(CREATE_CLUB_MUTATION);
  const { client } = React.useContext(getApolloContext());
  const handleSubmit = async values => {
    const date = moment(values.date, 'DD-MM-YYYY').format('MM-DD-YYYY');
    const variables = { ...values, holeNumber: parseInt(values.holeNumber), date, yardage: parseInt(values.yardage) };
    const result = await createClubMutation({ variables });
    if (get(result, 'data.createHoleInOne.id')) {
      await client.resetStore();
      history.push('/holes-in-one');
    }
  };
  if (loading) {
    return (
      <PageLoader />
    );
  }
  return (
    <View style={containerStyle}>
      <GoBackBar />
      <CreateHIOHeaderSection />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <CreateHIOForm
            formik={formik}
            loading={loadingCreateClub}
            error={error}
            clubsData={get(clubsData, 'clubs') || []}
          />)}
      </Formik>
      <Divider height={30} />
    </View>
  );
});
