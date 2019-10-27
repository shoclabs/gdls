import React, { useState } from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Text, View, Button } from 'native-base';
import { css } from 'css-rn';
import { RouteComponentProps, withRouter } from 'react-router';

import { colors } from '../../../theme/colors';

const buttonStyle = css`
  height: 48px;
  background-color: ${colors.green};
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

interface ISuccessDialogProps extends RouteComponentProps<any>{
  visible: boolean;
  onClose(): void;
}

export const SuccessDialog = withRouter<ISuccessDialogProps, any>(({ visible, history, onClose }) => {
  return (
    <Dialog visible={visible} onTouchOutside={onClose}>
      <DialogContent>
        <View style={contentStyle}>
          <Text style={descriptionStyle}>YOUR SCORE HAS</Text>
          <Text style={descriptionStyle}>BEEN SUBMITTED!</Text>
          <Button style={buttonStyle} onPress={onClose}>
            <Text style={buttonTextStyle}>OK</Text>
          </Button>
        </View>
      </DialogContent>
    </Dialog>
  );
});
