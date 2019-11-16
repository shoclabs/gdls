import React, { useState } from 'react';
import { Button, Content, Text, View, Input } from 'native-base';
import { css } from 'css-rn';

import { GoBackBar } from '../../components/GoBackBar';
import { Checkbox } from '../components/Checkbox';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { SuccessDialog } from '../components/SuccessDialog';
import { SearchUsersSection } from '../components/search-users-section/SearchUsersSection';

import { colors } from '../../../theme/colors';

const descriptionStyle = css`
  margin-top: 40px;
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
  margin: 25px 0;
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
  margin-top: 40px;
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

const checkboxStyle = css`
  margin: 50px 30px 0 30px;
`;

export const EnterOtherPointsScreen = () => {
  const [score, setScore] = useState('');
  const [userId, setUserId] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const handleSubmit = () => {
    if (score !== '' && confirmation && userId !== '') {
      setShowConfirmationDialog(true);
    }
  };
  return (
    <Content>
      <GoBackBar />
      <SearchUsersSection onSetUserId={setUserId} userId={userId} />
      <View style={descriptionStyle}>
        <Text style={textStyle}>ENTER OTHERS PLAYER'S</Text>
        <Text style={textStyle}>TOTAL <Text style={markedTextStyle}>STABLEFORD</Text> POINTS:</Text>
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
      <View style={checkboxStyle}>
        <Checkbox
          value={confirmation}
          text="I have been authorized by other player to register his score for this week."
          onChange={setConfirmation}
        />
      </View>
      <View style={buttonContainerStyle}>
        <Button style={buttonStyle} onPress={handleSubmit}>
          <Text style={buttonTextStyle}>SUBMIT</Text>
        </Button>
      </View>
      {userId !== '' && (
        <ConfirmationDialog
          visible={showConfirmationDialog}
          onClose={() => setShowConfirmationDialog(false)}
          score={score}
          onSuccess={() => setShowSuccessDialog(true)}
          id={userId}
        />
      )}
      <SuccessDialog visible={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
    </Content>
  );
};
