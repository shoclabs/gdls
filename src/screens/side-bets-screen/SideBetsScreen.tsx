import React from 'react';
import { Container, Content } from 'native-base';

import { BetsTable } from './components/BetsTable';

export const SideBetsScreen = () => {
  return (
    <Container>
      <Content>
        <BetsTable />
      </Content>
    </Container>
  );
};
