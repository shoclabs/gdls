import React from 'react';
import { Container } from 'native-base';

import { HeaderSection } from './components/HeaderSection';
import { HolesInOneTableHeader } from './components/HolesInOneTableHeader';
import { HolesInOneRow } from './components/HolesInOneRow';

export const HolesInOneScreen = () => {
  return (
    <Container>
      <HeaderSection />
      <HolesInOneTableHeader />
      <HolesInOneRow />
      <HolesInOneRow />
      <HolesInOneRow />
      <HolesInOneRow />
    </Container>
  );
};
