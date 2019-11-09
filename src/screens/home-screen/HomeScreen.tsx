import React, { useEffect } from 'react';
import { View } from 'react-native';
import { withRouter } from 'react-router';

import { HeaderSection } from './components/HeaderSection';
import { TableSection } from './components/TableSection';

export const HomeScreen = withRouter(({ history }) => {
  return (
    <View>
      <HeaderSection />
      <TableSection />
    </View>
  );
});
