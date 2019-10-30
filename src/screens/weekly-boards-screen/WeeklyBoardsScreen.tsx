import React from 'react';
import { Text, View } from 'react-native';

import { HeaderSection } from './components/HeaderSection';
import { TableHeader } from '../components/TableHeader';

const headers = ['Score'];

export const WeeklyBoardsScreen = () => (
  <View>
    <HeaderSection />
    <TableHeader headers={headers} />
  </View>
);
