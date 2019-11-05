import React from 'react';
import { Container, Content, Text } from 'native-base';

import { GoBackBar } from '../components/GoBackBar';

export const HolesInOneScreen = () => {
  return (
    <Container>
      <Content>
        <GoBackBar />
        <Text>I am holes in one screen</Text>
      </Content>
    </Container>
  );
};
