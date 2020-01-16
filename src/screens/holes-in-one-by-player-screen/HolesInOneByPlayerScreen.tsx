import React from 'react';
import { Text } from 'native-base';
import { css } from 'css-rn';
import { withRouter } from 'react-router-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { get } from 'lodash';

import { GoBackBar } from '../components/GoBackBar';
import { HoleInOne } from './components/HoleInOne';
import { PageLoader } from '../components/PageLoader';
import { Divider } from '../components/Divider';

import { colors } from '../../theme/colors';

const headerStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  color: ${colors.darkBlue};
  margin: 40px 0;
  text-align: center;
`;

const HIO_BY_PLAYER_QUERY = gql`
  query userQuery($playerId: EntityId!) {
    user(id: $playerId) {
      id
      holesInOne {
        id
        date
        courseName
        holeNumber
        yardage
        club {
          id
          name
        }
        totalAmountPaid
        paymentObligations {
          id
          didPay
          amountToPay
          userWithPaymentObligation {
            id
          }
        }
      }
    }
    me {
      id
      avatar {
        id
        contentBase64
        url
      }
    }
  }
`;

export const HolesInOneByPlayerScreen = withRouter(({ history, match }) => {
  const { playerId } = match.params;
  const { data, loading } = useQuery(HIO_BY_PLAYER_QUERY, { variables: { playerId } });
  if (loading) {
    return <PageLoader />;
  }
  const { user, me } = data;
  const hioIsMine = me.id === user.id;
  return (
    <>
      <GoBackBar />
      <Text style={headerStyle}>CURRENT HOLES-IN-ONE:</Text>
      {user.holesInOne.map(hio => {
        const paidObligations = hio.paymentObligations.filter(paymentObligation => paymentObligation.didPay);
        const totalAmountPaid = paidObligations.reduce((sum, item) => sum + item.amountToPay, 0);
        const myPaymentObligation =
          hio.paymentObligations.filter(item => item.userWithPaymentObligation.id === me.id);
        const paid = get(myPaymentObligation, '[0].didPay') === true;
        const notPaid = get(myPaymentObligation, '[0].didPay') === false;
        return (
          <HoleInOne
            key={hio.id}
            holeId={hio.id}
            date={moment(hio.date).format('DD/MM/YYYY')}
            courseName={hio.courseName}
            holeNumber={hio.holeNumber}
            description={hio.club.name}
            yardage={hio.yardage}
            money={totalAmountPaid}
            numberOfPeoplePaid={hio.paymentObligations.length - paidObligations.length}
            disabled={!hioIsMine}
            paid={paid}
            notPaid={notPaid}
          />
        )
      })}
      <Divider height={20} />
    </>
  );
});
