import React from 'react';
import { Container, Content } from 'native-base';

import { HIOHeader } from './components/HIOHeader';
import { GoBackBar } from '../components/GoBackBar';

export const HoleInOneScreen = () => {
  return (
    <Container>
      <Content>
        <GoBackBar />
        <HIOHeader />
      </Content>
    </Container>
  );
};
