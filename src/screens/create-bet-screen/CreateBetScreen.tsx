import React from 'react';
import { Container, Content } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { gql } from 'apollo-boost';
import { getApolloContext, useMutation } from '@apollo/react-hooks';
import { get } from 'lodash';
import { useHistory } from 'react-router-native';
import moment from 'moment';

import { CreateBetHeader } from './components/CreateBetHeader';
import { GoBackBar } from '../components/GoBackBar';
import { CreateBetForm } from './components/CreateBetForm';
import { authStore } from '../../stores/auth-store';

const initialValues = {
  date: '',
  name: '',
  course: '',
  amount: '',
  currentAdvantage: '',
  nextAdvantage: '',
};

const validationSchema = yup.object().shape({
  date: yup.string().required(),
  name: yup.string().required(),
  course: yup.string().required(),
  amount: yup.number().required(),
  currentAdvantage: yup.number().required(),
  nextAdvantage: yup.number().required(),
});

const CREATE_BETS_GROUP_MUTATION = gql`
  mutation CREATE_BETS_GROUP($name: String!, $userId: EntityId!) {
    createBetsGroup(input: { name: $name, user: { id: $userId } }) {
      id
      name
    }
  }
`;

const CREATE_BET_MUTATION = gql`
  mutation CREATE_BET($date: DateTime!, $amount: Float!, $betsGroupId: EntityId, $course: String!, $currentAdvantage: Float!, $nextAdvantage: Float!) {
    createBet(input: { date: $date, amount: $amount, betsGroup: { id: $betsGroupId }, course: $course, currentAdvantage: $currentAdvantage, nextAdvantage: $nextAdvantage}) {
      id
    }
  }
`;

export const CreateBetScreen = () => {
  const [createGroup, { loading: loadingGroup, error: errorGroup }] = useMutation(CREATE_BETS_GROUP_MUTATION);
  const [createBet, { loading: loadingBet, error: errorBet }] = useMutation(CREATE_BET_MUTATION);
  const { client } = React.useContext(getApolloContext());
  const history = useHistory();
  const handleSubmit = async values => {
    const { userId } = authStore;
    const groupVariables = { name: values.name, userId };
    const groupResult = await createGroup({ variables: groupVariables });
    const betsGroupId = get(groupResult, 'data.createBetsGroup.id');
    if (betsGroupId) {
      const { amount, course, currentAdvantage, nextAdvantage } = values;
      const date = moment(values.date, 'DD-MM-YYYY').format('MM-DD-YYYY');
      const betVariables = {
        date,
        amount: parseInt(amount),
        currentAdvantage: parseInt(currentAdvantage),
        nextAdvantage: parseInt(nextAdvantage),
        course,
        betsGroupId,
      };
      const betResult = await createBet({ variables: betVariables });
      if (get(betResult, 'data.createBet.id')) {
        await client.resetStore();
        history.push('/side-bets');
      }
    }
  };
  return (
    <Container>
      <Content>
        <GoBackBar />
        <CreateBetHeader />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <CreateBetForm
              formik={formik}
              loading={loadingBet || loadingGroup}
              error={errorBet || errorGroup}
            />
          )}
        </Formik>
      </Content>
    </Container>
  );
};
