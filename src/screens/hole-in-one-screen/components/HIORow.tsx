import React, { useState } from 'react';
import { View } from 'native-base';
import { css } from 'css-rn';

import { TableRowLeftContent } from '../../components/TableRowLeftContent';
import { Checkbox } from '../../enter-score-screen/components/Checkbox';

const rowStyle = css`
  flex-direction: row;
`;

const leftRowContentStyle = css`
  flex: 1;
`;

const rightRowContentStyle = css`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HIORow = () => {
  const [value, setValue] = useState(false);
  return (
    <View style={rowStyle}>
      <View style={leftRowContentStyle}>
        <TableRowLeftContent
          isWinner={false}
          isLooser={false}
          removeRank={true}
          fullName="Johny Morton"
          rank={undefined}
          avatar={undefined}
        />
      </View>
      <View style={rightRowContentStyle}>
        <Checkbox
          value={value}
          text=""
          onChange={() => setValue(!value)}
        />
      </View>
    </View>
  );
};
