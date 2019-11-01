import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { css } from 'css-rn';

import { TableHeader } from '../../components/TableHeader';
import { TableRow } from './TableRow';

const headers = ['Played', 'Won', 'Lost', '% Won', '% Lost', 'HCP', 'Money'];

const contentStyle = css`
  flex-direction: column;
`;

export const TableSection = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={contentStyle}>
      <TableHeader headers={headers} removeRank />
      <TableRow
        rank={1}
        played={10}
        won={2}
        lost={1}
        percentWon={0.34}
        percentLost={0}
        money={345}
        hcp={3}
        fullName="Mauricio Yanaculis"
        isWinner
      />
      <TableRow
        rank={2}
        played={5}
        won={1}
        lost={1}
        percentWon={0.1}
        percentLost={0.3}
        money={435}
        hcp={2}
        fullName="Trip Scammonden"
      />
      <TableRow
        rank={3}
        played={4}
        won={2}
        lost={2}
        percentWon={0.05}
        percentLost={0}
        money={23}
        fullName="Mislav Kucanda"
        hcp={2}
      />
      <TableRow
        rank={4}
        played={3}
        won={2}
        lost={0}
        percentWon={0.17}
        percentLost={0}
        money={10}
        hcp={7}
        fullName="Test User"
      />
      <TableRow
        rank={5}
        played={8}
        won={2}
        lost={0}
        percentWon={0.17}
        percentLost={0}
        money={800}
        hcp={9}
        fullName="Adriaens Reford"
        isLooser
      />
    </View>
  </ScrollView>
);
