import React from 'react';

import { ScoreCardTable } from '../components/ScoreCardTable';
import { GoBackBar } from '../../components/GoBackBar';

export const EnterScoreCardScreen = () => (
  <>
    <GoBackBar />
    <ScoreCardTable />
  </>
);
