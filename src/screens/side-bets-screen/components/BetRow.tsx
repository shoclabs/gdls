import React from 'react';
import { Button, Text, View } from 'native-base';
import { Image } from 'react-native';
import { css } from 'css-rn';
import { useHistory } from 'react-router-native';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../../components/Loader';

import { colors } from '../../../theme/colors';
import { numberToString } from '../../../utils/number-to-string';

const rightArrowGrey = require('../assets/arrow-white.png');
const rightArrowWhite = require('../assets/arrow-grey.png');
const greyCloseIcon = require('../../side-bets-details-screen/assets/grey-close.png');
const whiteCloseIcon = require('../../side-bets-details-screen/assets/white-close.png');

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
  width: 130px;
`;

const rightContentStyle = css`
  display: flex;
  align-items: center;
  width: 60px;
`;

const fullLeftContent = css`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const fullRightContentStyle = css`
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: flex-end;
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

const loaderContainerStyle = css`
  margin-right: 30px;
`;

const nextIconStyle = css`
  width: 25px;
  height: 30px;
`;

const closeIconStyle = css`
  width: 30px;
  height: 30px;
`;

const DELETE_SIDE_GROUP_MUTATION = gql`
  mutation DELETE_BET_GROUP($ids: [ID!]!) {
    deleteBetsGroups(ids: $ids)
  }
`;

interface IBetRow {
  betGroup: {
    id: string;
    name: string;
    amount: number;
    nextAdvantage: number;
  };
  index: number;
}

export const BetRow = ({ betGroup, index }: IBetRow) => {
  const history = useHistory();
  const [deleteSideGroup, { loading, error }] = useMutation(DELETE_SIDE_GROUP_MUTATION);
  const isGrey = index % 2 === 0;
  const handleDelete = async () => {
    await deleteSideGroup({
      variables: { ids: [betGroup.id] },
      refetchQueries: ['ME'],
    });
  };
  if (error) {
    alert('Unable to complete this action.');
  }
  return (
    <View style={containerStyle(isGrey)}>
      <View style={fullLeftContent}>
        <View style={leftContentStyle}>
          <Text style={textStyle}>{betGroup.name}</Text>
        </View>
        <View style={rightContentStyle}>
          <Text style={textStyle}>{numberToString(parseFloat(betGroup.amount.toFixed(2)))}</Text>
        </View>
        <View style={rightContentStyle}>
          <Text style={textStyle}>{betGroup.nextAdvantage}</Text>
        </View>
      </View>
      <View style={fullRightContentStyle}>
        <Button style={nextButton} transparent onPress={() => history.push(`/side-bets/${betGroup.id}`)}>
          <Image style={nextIconStyle} source={isGrey ? rightArrowGrey : rightArrowWhite} />
        </Button>
        {loading ?
          <View style={loaderContainerStyle}>
            <Loader color={colors.red} />
          </View> :
          <Button style={nextButton} transparent onPress={handleDelete}>
            <Image style={closeIconStyle} source={isGrey ? whiteCloseIcon : greyCloseIcon} />
          </Button>}
      </View>
    </View>
  );
};
