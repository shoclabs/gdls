import React from 'react';
import { Button, Text } from 'native-base';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  text-align: center;
  color: ${colors.darkBlue};
  margin: 30px 0;
`;

const buttonStyle = css`
  height: 48px;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const buttonTextStyle = css`
  color: white;
  font-family: open-sans-extra-bold;
  font-size: 18px;
`;

export const PickSelectImageOptionDialog = ({ visible, onClose, onLaunchCamera, onLaunchCameraRoll }) => {
  return (
    <Dialog visible={visible} onTouchOutside={onClose}>
      <DialogContent>
        <Text style={textStyle}>SELECT UPLOAD OPTION</Text>
        <Button style={buttonStyle} onPress={onLaunchCamera}>
          <Text style={buttonTextStyle}>CAMERA</Text>
        </Button>
        <Button style={buttonStyle} onPress={onLaunchCameraRoll}>
          <Text style={buttonTextStyle}>IMAGE LIBRARY</Text>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
