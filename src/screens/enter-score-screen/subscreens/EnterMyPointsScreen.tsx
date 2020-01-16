import React, { useState, useEffect } from 'react';
import { Button, Text, View, Input } from 'native-base';
import { css } from 'css-rn';
import { useHistory } from 'react-router-native';

import { GoBackBar } from '../../components/GoBackBar';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { SuccessDialog } from '../components/SuccessDialog';

import { colors } from '../../../theme/colors';
import { authStore } from '../../../stores/auth-store';

const descriptionStyle = css`
  margin-top: 65px;
  align-items: center;
`;

const textStyle = css`
  font-size: 20px;
  color: ${colors.darkBlue};
  font-family: open-sans-extra-bold;
`;

const markedTextStyle = css`
  font-size: 20px;
  color: ${colors.blue};
  font-family: open-sans-extra-bold-italic;
`;

const buttonContainerStyle = css`
  padding: 0 25px;
  margin-top: 30px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${colors.green};
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
  color: white;
  font-size: 18px;
`;

const inputContainerStyle = css`
  margin-top: 70px;
  align-items: center;
`;

const inputStyle = css`
  background-color: ${colors.blue};
  border-radius: 8px;
  width: 180px;
  height: 180px;
  font-family: open-sans-extra-bold;
  font-size: 64px;
  color: white;
  text-align: center;
`;

export const EnterMyPointsScreen = () => {
  const [score, setScore] = useState('');
  const { userId } = authStore;
  const [scoreIsEntered, setScoreIsEntered] = useState(false);
  const history = useHistory();
  useEffect( () => {
    if (scoreIsEntered) {
      setTimeout(() => {
        history.push('/enter-score');
      }, 1000);
    }
  }, [scoreIsEntered]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const handleSubmit = () => {
    if (score !== '') {
      setShowConfirmationDialog(true);
    }
  };
  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    setScoreIsEntered(true);
  };
  return (
    <>
      <GoBackBar />
      <View style={descriptionStyle}>
        <Text style={textStyle}>ENTER YOUR TOTAL</Text>
        <Text style={textStyle}><Text style={markedTextStyle}>STABLEFORD</Text> POINTS:</Text>
      </View>
      <View style={inputContainerStyle}>
        <Input
          style={inputStyle}
          selectionColor="white"
          keyboardType="numeric"
          value={score}
          onChangeText={text => setScore(text)}
        />
      </View>
      <View style={buttonContainerStyle}>
        <Button style={buttonStyle} onPress={handleSubmit}>
          <Text style={buttonTextStyle}>SUBMIT</Text>
        </Button>
      </View>
      {userId &&
        <ConfirmationDialog
          visible={showConfirmationDialog}
          onClose={() => setShowConfirmationDialog(false)}
          score={score}
          onSuccess={() => setShowSuccessDialog(true)}
          userId={userId}
        />}
      <SuccessDialog visible={showSuccessDialog} onClose={handleCloseSuccessDialog} />
    </>
  );
};
