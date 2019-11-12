import React from 'react';
import { Container, Content } from 'native-base';

import { HIOHeader } from './components/HIOHeader';
import { GoBackBar } from '../components/GoBackBar';
import { HIOTableHeader } from './components/HIOTableHeader';
import { HIOTableSection } from './components/HIOTableSection';

export const HoleInOneScreen = () => {
  return (
    <Container>
      <Content>
        <GoBackBar />
        <HIOHeader date="24/01/2019" description="Bosques de Santa Fe" />
        <HIOTableHeader />
        <HIOTableSection />
      </Content>
    </Container>
  );
};
