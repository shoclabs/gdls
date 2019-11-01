import React, { useState } from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Text, View, Button } from 'native-base';
import { css } from 'css-rn';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import moment from 'moment';
import { get } from 'lodash';

import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';

import { colors } from '../../../theme/colors';

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
  mutation CREATE_ROUND($score: Float!, $weekNumber: Float!, $year: Float!) {
    createRound(input: { score: $score, weekNumber: $weekNumber, year: $year }) {
      id
    }
  }
`;

interface IConfirmationDialog {
  visible: boolean;
  onClose(): void;
  score: string;
  onSuccess(): void;
  id?: string;
}

export const ConfirmationDialog = ({ visible, onClose, score, onSuccess, id }: IConfirmationDialog) => {
  const [createScoreMutation, { data, loading, error }] = useMutation(CREATE_SCORE_MUTATION);
  const handleSubmit = async () => {
    const variables = {
      score: parseInt(score),
      weekNumber: moment().weeks(),
      year: moment().year(),
    };
    createScoreMutation({ variables });
  };
  if (get(data, 'createRound.id')) {
    onClose();
    onSuccess();
  }
  return (
    <Dialog visible={visible} onTouchOutside={onClose}>
      <DialogContent>
        <View style={contentStyle}>
          <Text style={descriptionStyle}>ARE YOU SURE YOU WISH</Text>
          <Text style={descriptionStyle}>TO SUBMIT YOUR SCORE?</Text>
          {error && <ErrorMessage text="Error while saving your score." />}
          <Button style={buttonStyle} onPress={handleSubmit}>
            {loading ? <Loader /> : <Text style={buttonTextStyle}>YES</Text>}
          </Button>
        </View>
      </DialogContent>
    </Dialog>
  );
};
