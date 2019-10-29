import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'native-base';
import { css } from 'css-rn';

import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

const contentStyle = css`
  flex-direction: column;
  min-width: 100%;
`;

export const TableSection = () => (
  <View>
    <ScrollView horizontal>
      <View style={contentStyle}>
        <TableHeader />
        <TableRow
          rank={1}
          played={10}
          won={2}
          fullName="Mauricio Yanaculis"
          isWinner
        />
        <TableRow
          rank={2}
          played={5}
          won={1}
          fullName="Trip Scammonden"
        />
        <TableRow
          rank={3}
          played={4}
          won={2}
          fullName="Mislav Kucanda"
        />
        <TableRow
          rank={4}
          played={3}
          won={2}
          fullName="Test User"
        />
        <TableRow
          rank={5}
          played={8}
          won={2}
          fullName="Adriaens Reford"
          isLooser
        />
      </View>
    </ScrollView>
  </View>
);
