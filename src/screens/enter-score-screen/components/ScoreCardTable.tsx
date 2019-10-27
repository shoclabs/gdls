import React from 'react';
import { View } from 'native-base';

import { ScoreCardHeader } from './ScoreCardHeader';
import { ScoreCardBody } from './ScoreCardBody';

export const ScoreCardTable = () => (
  <View>
    <ScoreCardHeader />
    <ScoreCardBody />
  </View>
);
