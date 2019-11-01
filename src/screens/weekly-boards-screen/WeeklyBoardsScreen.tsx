import React from 'react';
import { View } from 'react-native';

import { HeaderSection } from './components/HeaderSection';
import { TableHeader } from '../components/TableHeader';
import { TableRow } from './components/TableRow';

const headers = ['Score'];

export const WeeklyBoardsScreen = () => (
  <View>
    <HeaderSection />
    <TableHeader headers={headers} />
    <TableRow fullName="Mauricio Yanaculis" isWinner isLooser={false} rank={1} score={60} />
    <TableRow fullName="Trip Scammonden" isWinner={false} isLooser={false} rank={2} score={53} />
    <TableRow fullName="Tom Mahok" isWinner={false} isLooser={false} rank={3} score={45} />
    <TableRow fullName="Rollo Cressey" isWinner={false} isLooser={false} rank={4} score={16} />
    <TableRow fullName="Donnie Boerder" isWinner={false} isLooser={false} rank={5} score={8} />
    <TableRow fullName="Mislav Kucanda" isWinner={false} isLooser={false} rank={6} score={3} />
    <TableRow fullName="Alejandro Yanaculis" isWinner={false} isLooser={true} rank={7} score={1} />
  </View>
);
