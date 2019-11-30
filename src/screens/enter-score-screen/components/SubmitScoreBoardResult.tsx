import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'native-base';
import { css } from 'css-rn';
import { useHistory } from 'react-router-native';

import { ConfirmationDialog } from './ConfirmationDialog';
import { SuccessDialog } from './SuccessDialog';

import { colors } from '../../../theme/colors';

const buttonContainerStyle = css`
  margin: 30px 0;
`;

const buttonStyle = css`
  height: 48px;
  background-color: ${colors.green};
  justify-content: center;
  margin: 0 25px;
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 18px;
  color: white;
`;

export const SubmitScoreBoardResult = ({ result, userId }) => {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [scoreIsEntered, setScoreIsEntered] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (scoreIsEntered) {
      setTimeout(() => {
        history.push('/enter-score');
      }, 1000);
    }
  }, [scoreIsEntered]);
  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    setScoreIsEntered(true);
  };
  return (
    <>
      <View style={buttonContainerStyle}>
        <Button style={buttonStyle} onPress={() => setShowConfirmationDialog(true)}>
          <Text style={buttonTextStyle}>SUBMIT</Text>
        </Button>
      </View>
      <ConfirmationDialog
        userId={userId}
        visible={showConfirmationDialog}
        onClose={() => setShowConfirmationDialog(false)}
        score={result}
        onSuccess={() => setShowSuccessDialog(true)}
      />
      <SuccessDialog visible={showSuccessDialog} onClose={handleCloseSuccessDialog} />
    </>
  );
};
