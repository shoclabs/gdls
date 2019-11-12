import React from 'react';
import { View } from 'native-base';
import { sortBy } from 'lodash';

import { HIORow, IPaymentObligation } from './HIORow';

interface IHIOTableSection {
  paymentObligations: Array<IPaymentObligation>;
}

export const HIOTableSection = ({ paymentObligations }: IHIOTableSection) => {
  const sortOptions = ['userWithPaymentObligation.firstName', 'userWithPaymentObligation.lastName'];
  const sortedObligations = sortBy(paymentObligations, sortOptions);
  return (
    <View>
      {sortedObligations.map((paymentObligation, index) => (
        <HIORow key={paymentObligation.id} paymentObligation={paymentObligation} index={index} />
      ))}
    </View>
  );
};
