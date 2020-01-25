import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { get } from 'lodash';

import { DefaultDumbHatImage } from './DefaultDumbHatImage';
import { DumbHatImage } from './DumbHatImage';

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

const GET_ACTIVE_WEEK = gql`
  {
    activeYear {
      id
      year
      isActive
    }
  }
`;

interface  IHeaderSection {
  loserIds: String[] | [undefined];
}

export const HeaderSection = ({ loserIds }: IHeaderSection) => {
  const { data, loading, error } = useQuery(GET_ACTIVE_WEEK);
  if (loading || !data) {
    return null;
  }
  const displayDefaultImage = loserIds.length > 1 || get(loserIds, '[0]') === undefined;
  return (
    <View style={containerStyle}>
      {displayDefaultImage ?
        <DefaultDumbHatImage /> :
        <DumbHatImage loserId={get(loserIds, '[0]')} />}
      <Text style={titleStyle}>{data.activeYear.year}</Text>
    </View>
  );
};
