import React, { useState } from 'react';
import { get } from 'lodash';
import { Image } from 'react-native';
import { Button, Icon, Input, View } from 'native-base';
import { css } from 'css-rn';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { SearchResultList } from './SearchResultList';

import { colors } from '../../../../theme/colors';

const searchIcon = require('../../assets/search-icon.png');

const containerStyle = isOpen => css`
  margin: 40px 50px 0 50px;
  border: solid 2px ${colors.darkBlue};
  ${isOpen ? 'border-bottom-width: 0px;' : ''}
  border-radius: 4px;
  height: 48px;
  align-items: center;
  flex-direction: row;
`;

const searchStyle = css`
  color: ${colors.darkBlue};
  margin-left: 6px;
  font-family: open-sans-regular;
  font-size: 14px;
`;

const searchIconStyle = css`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const closeIconStyle = css`
  color: ${colors.red};
  font-size: 40px;
`;

const closeButtonStyle = css`
  padding: 0;
  align-items: center;
  justify-content: center;
`;

const SEARCH_USERS = gql`
  query SEARCH_USERS($name: String!) {
    searchUsersByName(name: $name) {
      id
      firstName
      lastName
    }
  }
`;

export const SearchUsersSection = ({ onSetUserId, userId }) => {
  const [name, setName] = useState('');
  const { data, loading, error} = useQuery(SEARCH_USERS, {
    variables: { name }
  });
  const handleSelect = (id, fullName) => {
    onSetUserId(id);
    setName(fullName);
  };
  const handleClearSearch = () => {
    onSetUserId('');
    setName('');
  };
  return (
    <View>
      <View style={containerStyle(get(data, 'searchUsersByName') > 0)}>
        <Image source={searchIcon} style={searchIconStyle} />
        <Input
          style={searchStyle}
          selectionColor={colors.darkBlue}
          placeholder="Player name"
          placeholderTextColor={colors.darkBlue}
          value={name}
          onChangeText={setName}
        />
        {name !== '' &&
          <Button transparent onPress={handleClearSearch} style={closeButtonStyle}>
            <Icon name="close" style={closeIconStyle} />
          </Button>}
      </View>
      {(get(data, 'searchUsersByName.length') > 0 || loading) && name.length > 2 && !userId &&
        <SearchResultList
          users={get(data, 'searchUsersByName') || []}
          loading={loading}
          onSelect={handleSelect}
        />}
    </View>
  );
};
