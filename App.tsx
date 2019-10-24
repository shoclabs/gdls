import React from 'react';
import { NativeRouter } from 'react-router-native';

import { MainRouter } from './src/screens/MainRouter';

export default function App() {
  return (
    <NativeRouter>
      <MainRouter />
    </NativeRouter>
  );
}

