import React, { useEffect } from 'react';
import { View } from 'react-native';
import { withRouter } from 'react-router';

import { TableSection } from './components/TableSection';

export const HomeScreen = withRouter(({ history }) => {
  return (
    <View>
      <TableSection />
    </View>
  );
});
