import React from 'react';
import { Container, Content, Text } from 'native-base';
import { css } from 'css-rn';
import { withRouter } from 'react-router-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

import { GoBackBar } from '../components/GoBackBar';
import { HoleInOne } from './components/HoleInOne';
import { PageLoader } from '../components/PageLoader';

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
        club {
          id
          name
        }
        totalAmountPaid
        paymentObligations {
          id
          didPay
          amountToPay
        }
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
  return (
    <Container>
      <Content>
        <GoBackBar />
        <Text style={headerStyle}>CURRENT HOLES-IN-ONE:</Text>
        {data.user.holesInOne.map(hio => {
          const paidObligations = hio.paymentObligations.filter(paymentObligation => paymentObligation.didPay);
          const money = paidObligations.reduce((sum, paidObligation) => sum + paidObligation, 0);
          return (
            <HoleInOne
              key={hio.id}
              date={moment(hio.date).format('DD/MM/YYYY')}
              location={hio.courseName}
              holeNumber={hio.holeNumber}
              description={hio.club.name}
              money={money}
              numberOfPeoplePaid={paidObligations.length}
            />
          )
        })}
      </Content>
    </Container>
  );
});
