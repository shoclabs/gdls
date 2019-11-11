import React from 'react';
import { Container, Content } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { gql } from 'apollo-boost';

import { GoBackBar } from '../components/GoBackBar';
import { CreateHIOHeaderSection } from './components/CreateHIOHeaderSection';
import { CreateHIOForm } from './components/CreateHIOForm';
import { PageLoader } from '../components/PageLoader';

const initialValues = {
  date: '',
  courseName: '',
  holeNumber: '',
  club: '',
};

const validationSchema = yup.object().shape({
  date: yup.string().required(),
  courseName: yup.string().required(),
  holeNumber: yup.string().required(),
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

export const CreateHoleInOneScreen = () => {
  const { data: clubsData, loading } = useQuery(CLUBS_QUERY);
  const handleSubmit = values => {
    console.log('handleSubmit values', values);
  };
  if (loading) {
    return (
      <PageLoader />
    );
  }
  return (
    <Container>
      <Content>
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
              loading={false}
              clubsData={get(clubsData, 'clubs') || []}
            />)}
        </Formik>
      </Content>
    </Container>
  );
};
