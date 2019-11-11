import React from 'react';
import { Container, Content } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';

import { GoBackBar } from '../components/GoBackBar';
import { CreateHIOHeaderSection } from './components/CreateHIOHeaderSection';
import { CreateHIOForm } from './components/CreateHIOForm';

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

export const CreateHoleInOneScreen = () => {
  const handleSubmit = values => {
    console.log('handleSubmit values', values);
  };
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
          {formik => <CreateHIOForm formik={formik} loading={false} />}
        </Formik>
      </Content>
    </Container>
  );
};
