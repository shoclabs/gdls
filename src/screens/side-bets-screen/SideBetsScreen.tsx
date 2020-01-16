import React from 'react';

import { BetsTable } from './components/BetsTable';
import { Divider } from '../components/Divider';

export const SideBetsScreen = () => {
  return (
    <>
      <BetsTable />
      <Divider height={30} />
    </>
  );
};
