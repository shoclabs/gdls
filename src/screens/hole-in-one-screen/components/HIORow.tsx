import React, { useState } from 'react';
import { View } from 'native-base';
import { css } from 'css-rn';

import { TableRowLeftContent } from '../../components/TableRowLeftContent';
import { Checkbox } from '../../enter-score-screen/components/Checkbox';

import { colors } from '../../../theme/colors';

const rowStyle = hasBackground => css`
  flex-direction: row;
  ${hasBackground ? `background-color: ${colors.lightGrey}` : ''}
`;

const leftRowContentStyle = css`
  flex: 1;
`;

const rightRowContentStyle = css`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export interface IPaymentObligation {
  id: string;
  didPay: boolean;
  userWithPaymentObligation: {
    firstName: string;
    lastName: string;
    avatar: {
      contentBase64: string;
    };
  };
}

interface IHIORow {
  paymentObligation: IPaymentObligation;
  index: number;
}

export const HIORow = ({ paymentObligation, index }: IHIORow) => {
  const { didPay, userWithPaymentObligation } = paymentObligation;
  const { firstName, lastName, avatar } = userWithPaymentObligation;
  const [value, setValue] = useState(didPay);
  return (
    <View style={rowStyle(index % 2 === 0)}>
      <View style={leftRowContentStyle}>
        <TableRowLeftContent
          isWinner={false}
          isLooser={false}
          removeRank={true}
          fullName={`${firstName} ${lastName}`}
          rank={undefined}
          avatar={avatar}
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
