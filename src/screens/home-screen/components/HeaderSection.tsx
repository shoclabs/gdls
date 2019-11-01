import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const containerStyle = css`
  height: 214px;
  background-color: black;
  position: relative;
`;

const titleStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 32px;
  text-align: center;
  left: 17px;
  top: 10px;
  position: absolute;
  color: white;
`;

const imageStyle = css`
  height: 214px;
`;

const placeholderStyle = css`
  height: 214px;
  background-color: black;
`;

const GET_ACTIVE_WEEK = gql`
  {
    activeWeek {
      id
      weekNumber
      isActive
    }
  }
`;

interface  IHeaderSection {
  imageUrl?: ImageSourcePropType;
}

export const HeaderSection = ({ imageUrl }: IHeaderSection) => {
  const { data, loading, error } = useQuery(GET_ACTIVE_WEEK);
  if (loading) {
    return null;
  }
  return (
    <View style={containerStyle}>
      {imageUrl ?
        <Image style={imageStyle} source={imageUrl} /> :
        <View style={placeholderStyle} />}
      <Text style={titleStyle}>WEEK {data.activeWeek.weekNumber}</Text>
    </View>
  );
};
