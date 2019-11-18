import React from 'react';
import { Container, Content } from 'native-base';

import { HeaderSection } from '../holes-in-one-screen/components/HeaderSection';
import { BetsTable } from './components/BetsTable';

export const SideBetsScreen = () => {
  return (
    <Container>
      <Content>
        <HeaderSection label="SIDE BETS" />
        <BetsTable />
      </Content>
    </Container>
  );
};
