import React from 'react';
import { css } from 'css-rn';
import { Image } from 'react-native';
import { Button, Text, View } from 'native-base';
import { RouteComponentProps, withRouter } from 'react-router';

const holeInOneIcon = require('../assets/hole-in-one.png');
const profileIcon = require('../assets/profile.png');
const sideBetsIcon = require('../assets/sidebets.png');

const itemStyle = css`
  margin-left: 90px;
  display: flex;
  flex-direction: row;
  width: 145px;
  justify-content: flex-start;
`;

const iconStyle = css`
  height: 24px;
  width: 24px;
`;

const textStyle = css`
  font-family: open-sans-regular;
  font-size: 15px;
  color: white;
`;

interface IMenuSectionProps extends RouteComponentProps<any>{
  onClose(): void;
}

export const MenuSection = withRouter<IMenuSectionProps, any>(({ history, onClose }) => {
  const handleOpenScreen = path => () => {
    history.push(path);
    onClose();
  };
  return (
    <View>
      <Button transparent style={itemStyle} onPress={handleOpenScreen('/my-profile')}>
        <Image style={iconStyle} source={profileIcon} />
        <Text style={textStyle}>PROFILE</Text>
      </Button>
      <Button transparent style={itemStyle} onPress={handleOpenScreen('/holes-in-one')}>
        <Image style={iconStyle} source={holeInOneIcon} />
        <Text style={textStyle}>HOLES-IN-ONE</Text>
      </Button>
      <Button transparent style={itemStyle}>
        <Image style={iconStyle} source={sideBetsIcon} />
        <Text style={textStyle}>SIDE BETS</Text>
      </Button>
      <Button transparent style={itemStyle} onPress={handleOpenScreen('/settings-screen')}>
        <Image style={iconStyle} source={sideBetsIcon} />
        <Text style={textStyle}>SETTINGS</Text>
      </Button>
    </View>
  )
});
