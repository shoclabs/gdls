import React, { useState } from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Text, View, Button } from 'native-base';
import { css } from 'css-rn';
import gql from 'graphql-tag';
import { useMutation, getApolloContext, useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { get } from 'lodash';

import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';

import { colors } from '../../../theme/colors';
import { alreadyEnteredRoundId } from '../utils/already-entered-round-id';
import { authStore } from '../../../stores/auth-store';

const buttonStyle = css`
  height: 48px;
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  margin: 30px 0 10px 0;
`;

const descriptionStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  text-align: center;
  color: ${colors.darkBlue};
`;

const buttonTextStyle = css`
  color: white;
  font-family: open-sans-extra-bold;
  font-size: 18px;
`;

const contentStyle = css`
  margin-top: 30px;
`;

const CREATE_SCORE_MUTATION = gql`
  mutation CREATE_ROUND($score: Float!, $weekNumber: Float!, $year: Float!, $userId: EntityId!) {
    createRound(input: { score: $score, weekNumber: $weekNumber, year: $year, user: { id: $userId } }) {
      id
    }
  }
`;

const UPDATE_SCORE_MUTATION = gql`
  mutation UPTADE_SCORE($roundId: EntityId!, $score: Float!) {
    updateRound(input: { id: $roundId, score: $score }) {
      id
    }
  }
`;

const ROUNDS_AND_ACTIVE_WEEK_QUERY = gql`
  query ROUNDS_AND_ACTIVE_WEEK($userId: EntityId!) {
    user(id: $userId) {
      id
        rounds {
          id
          week {
            id
            weekNumber
            isActive
          }
      }
    }
    activeWeek {
      id
      weekNumber
      isActive
    }
  }
`;

interface IConfirmationDialog {
  visible: boolean;
  onClose(): void;
  score: string;
  onSuccess(): void;
  id?: string;
  userId?: string;
}

export const ConfirmationDialog = ({ visible, onClose, score, onSuccess, id, userId }: IConfirmationDialog) => {
  const [createScoreMutation, { data, loading, error }] = useMutation(CREATE_SCORE_MUTATION);
  const [showCustomError, setShowCustomError] = useState(false);
  const [updateScoreMutation, { data: updateScoreData, loading: loadingScoreData }] = useMutation(UPDATE_SCORE_MUTATION);
  const { data: userRoundsData, loading: userRoundsLoading } =
    useQuery(ROUNDS_AND_ACTIVE_WEEK_QUERY, { variables: { userId: (id || userId) } });
  const { client } = React.useContext(getApolloContext());
  const handleSubmit = async () => {
    const { user, activeWeek } = userRoundsData;
    if (moment().day() !== 6) {
      return setShowCustomError(true);
    }
    const roundId = alreadyEnteredRoundId(user.rounds, activeWeek.weekNumber);
    const userId = id || authStore.userId;
    if (!roundId) {
      const variables = {
        score: parseInt(score),
        weekNumber: moment().weeks(),
        year: moment().year(),
        userId,
      };
      createScoreMutation({ variables });
      await client.resetStore();
      return;
    }
    const variables = { score: parseInt(score), roundId };
    updateScoreMutation({ variables });
    await client.resetStore();
    return;
  };
  if (get(data, 'createRound.id') || get(updateScoreData, 'updateRound.id')) {
    onClose();
    onSuccess();
  }
  if (userRoundsLoading) {
    return (
      <Dialog visible={visible} onTouchOutside={onClose}>
        <DialogContent>
          <Loader color={colors.darkBlue} />
        </DialogContent>
      </Dialog>
    );
  }
  const { user, activeWeek } = userRoundsData;
  const roundId = alreadyEnteredRoundId(user.rounds, activeWeek.weekNumber);
  const errorMessage = 'Sorry, weekly results can only be entered once. Please contact the administrator.';
  const customErrorMessage = 'Sorry, results can only be entered on Saturdays.';
  return (
    <Dialog visible={visible} onTouchOutside={onClose}>
      <DialogContent>
        <View style={contentStyle}>
          <Text style={descriptionStyle}>ARE YOU SURE YOU WISH</Text>
          <Text style={descriptionStyle}>TO {roundId ? 'RESUBMIT' : 'SUBMIT'} YOUR SCORE?</Text>
          {error && <ErrorMessage text={errorMessage} />}
          {showCustomError && <ErrorMessage text={customErrorMessage} />}
          <Button style={buttonStyle} onPress={handleSubmit}>
            {loading || loadingScoreData ? <Loader /> : <Text style={buttonTextStyle}>YES</Text>}
          </Button>
        </View>
      </DialogContent>
    </Dialog>
  );
};
