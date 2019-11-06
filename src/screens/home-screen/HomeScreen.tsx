import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { withRouter } from 'react-router';

import { HeaderSection } from './components/HeaderSection';
import { TableSection } from './components/TableSection';

export const HomeScreen = withRouter(({ history }) => {
  history.push('/holes-in-one');
  return (
    <View>
      <HeaderSection />
      <TableSection />
    </View>
  );
});
