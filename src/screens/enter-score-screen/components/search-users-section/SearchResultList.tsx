import { slice } from 'lodash';
import React from 'react';
import { Button, View, Text } from 'native-base';
import { css } from 'css-rn';

import { Loader } from '../../../components/Loader';

import { colors } from '../../../../theme/colors';

const containerStyle = css`
  margin: 0 50px;
  border: solid 2px ${colors.darkBlue};
  border-top-width: 1px;
  background-color: white;
  margin-top: -2px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const loaderContainerStyle = css`
  height: 70px;
  align-items: center;
  justify-content: center;
`;

const textStyle = css`
  color: ${colors.darkBlue};
  padding-left: 50px;
  font-family: open-sans-regular;
  font-size: 14px
`;

const buttonStyle = isGrey => css`
  background-color: ${isGrey ? colors.lightGrey : 'white'};
`;

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

interface ISearchResultListProps {
  users: IUser[];
  loading: boolean;
  onSelect(id: string, fullName: string): void;
}

export const SearchResultList = ({ users, loading, onSelect }: ISearchResultListProps) => {
  if (loading) {
    return (
      <View style={[containerStyle, loaderContainerStyle]}>
        <Loader color={colors.darkBlue} />
      </View>
    );
  }
  return (
    <View style={containerStyle}>
      {slice(users, 0, 6).map(({ id, firstName, lastName }, index) => (
        <Button
          transparent
          key={id}
          style={buttonStyle(index % 2 === 0)}
          onPress={() => onSelect(id, `${firstName} ${lastName}`)}
        >
          <Text style={textStyle}>{`${firstName} ${lastName}`}</Text>
        </Button>
      ))}
    </View>
  );
};
