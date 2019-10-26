import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { withRouter } from 'react-router';

export const HomeScreen = withRouter(({ history }) => {
  return (
    <View>
      <Text>
        Home screen
      </Text>
    </View>
  );
});
