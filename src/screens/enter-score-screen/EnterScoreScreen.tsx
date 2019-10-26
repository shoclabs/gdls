import React from 'react';
import { css } from 'css-rn';
import { Route } from 'react-router-native';

import { ChooseScoreMethod } from './subscreens/ChooseScoreMethod';
import { EnterMyPointsScreen } from './subscreens/EnterMyPointsScreen';
import { EnterOtherPointsScreen } from './subscreens/EnterOtherPointsScreen';

export const EnterScoreScreen = () => (
  <>
    <Route exact path="/enter-score" component={ChooseScoreMethod} />
    <Route path="/enter-score/my" component={EnterMyPointsScreen} />
    <Route path="/enter-score/other" component={EnterOtherPointsScreen} />
  </>
);
