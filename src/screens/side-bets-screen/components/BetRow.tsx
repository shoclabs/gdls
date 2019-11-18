import React from 'react';
import { Button, Text, View } from 'native-base';
import { Image } from 'react-native';
import { css } from 'css-rn';
import { useHistory } from 'react-router-native';

import { colors } from '../../../theme/colors';

const rightArrowGrey = require('../assets/arrow-white.png');
const rightArrowWhite = require('../assets/arrow-grey.png');

const containerStyle = (isGrey: boolean) => css`
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${isGrey ? `background-color: ${colors.lightGrey}`: ''}
`;

const leftContentStyle = css`
  display: flex;
  align-items: flex-start;
  padding-left: 25px;
  width: 150px;
`;

const rightContentStyle = css`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 5px;
`;

const textStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
`;

const nextButton = css`
  width: 25px;
  height: 30px;
  margin-right: 30px;
`;

const nextIconStyle = css`
  width: 25px;
  height: 30px;
`;

interface IBetRow {
  betGroup: {
    id: string;
    name: string;
    amount: number;
  };
  index: number;
}

export const BetRow = ({ betGroup, index }: IBetRow) => {
  const history = useHistory();
  const isGrey = index % 2 === 0;
  return (
    <View style={containerStyle(isGrey)}>
      <View style={leftContentStyle}>
        <Text style={textStyle}>{betGroup.name}</Text>
      </View>
      <View style={rightContentStyle}>
        <Text style={textStyle}>{betGroup.amount.toFixed(2)}</Text>
        <Button style={nextButton} transparent onPress={() => history.push(`/side-bets/${betGroup.id}`)}>
          <Image style={nextIconStyle} source={isGrey ? rightArrowGrey : rightArrowWhite} />
        </Button>
      </View>
    </View>
  );
};
