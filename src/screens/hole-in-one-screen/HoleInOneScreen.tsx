import React from 'react';
import { withRouter } from 'react-router-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

import { HIOHeader } from './components/HIOHeader';
import { GoBackBar } from '../components/GoBackBar';
import { HIOTableHeader } from './components/HIOTableHeader';
import { HIOTableSection } from './components/HIOTableSection';
import { PageLoader } from '../components/PageLoader';
import { Divider } from '../components/Divider';

const HIO_QUERY = gql`
  query hioQuery($holeId: EntityId!) {
    holeInOne(id: $holeId) {
      id
      date
      club {
        id
        name
      }
      courseName
      paymentObligations {
        id
        didPay
        amountToPay
        userWithPaymentObligation {
          id
          firstName
          lastName
          avatar {
            id
            contentBase64
          }
        }
      }
    }
  }
`;

export const HoleInOneScreen = withRouter(({ match }) => {
  const { holeId } = match.params;
  const { loading, data } = useQuery(HIO_QUERY, { variables: { holeId } });
  if (loading) {
    return <PageLoader />;
  }
  const { holeInOne } = data;
  return (
    <>
      <GoBackBar />
      <HIOHeader
        date={moment(holeInOne.date).format('DD/MM/YYYY')}
        description={holeInOne.club.name}
      />
      <HIOTableHeader />
      <HIOTableSection paymentObligations={holeInOne.paymentObligations} />
      <Divider height={200} />
    </>
  );
});
