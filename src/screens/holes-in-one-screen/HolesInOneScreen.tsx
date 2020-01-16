import React from 'react';
import { Container } from 'native-base';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { get, sortBy } from 'lodash';

import { HeaderSection } from './components/HeaderSection';
import { HolesInOneTableHeader } from './components/HolesInOneTableHeader';
import { HolesInOneRow } from './components/HolesInOneRow';
import { PageLoader } from '../components/PageLoader';
import { Divider } from '../components/Divider';

const HIO_QUERY = gql`
  {
    users {
      id
      firstName
      lastName
      avatar {
        id
        contentBase64
      }
      holesInOne {
        id
        totalAmountPaid
      }
    }
  }
`;

export const HolesInOneScreen = () => {
  const { data, loading } = useQuery(HIO_QUERY);
  if (loading) {
    return (
      <PageLoader />
    );
  }
  const users = data.users
    .filter(user => user.holesInOne.length > 0)
    .map(({ id, firstName, lastName, avatar, holesInOne }) => ({
      id: id,
      firstName: firstName,
      lastName: lastName,
      contentBase64: get(avatar, 'contentBase64'),
      numberOfHolesInOne: holesInOne.length,
      totalAmountPaid: holesInOne.reduce((sum, hole) => sum + hole.totalAmountPaid, 0),
    }));
  return (
    <>
      <HeaderSection label="HOLES-IN-ONE" />
      <HolesInOneTableHeader />
      {sortBy(users, 'numberOfHolesInOne').reverse()
        .map((user, index) => <HolesInOneRow user={user} key={user.id} index={index} />)}
      <Divider height={100} />
    </>
  );
};
