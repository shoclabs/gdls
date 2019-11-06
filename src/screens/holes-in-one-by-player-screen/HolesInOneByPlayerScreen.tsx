import React from 'react';
import { Container, Content, Text } from 'native-base';
import { css } from 'css-rn';

import { GoBackBar } from '../components/GoBackBar';
import { HoleInOne } from './components/HoleInOne';

import { colors } from '../../theme/colors';

const headerStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  color: ${colors.darkBlue};
  margin: 40px 0;
  text-align: center;
`;

export const HolesInOneByPlayerScreen = () => {
  console.log('tu sam');
  return (
    <Container>
      <Content>
        <GoBackBar />
        <Text style={headerStyle}>CURRENT HOLES-IN-ONE:</Text>
        <HoleInOne
          date="24/01/19"
          location="BOSQUES DE SANTA FE"
          holeNumber={13}
          description="DRIVER"
          numberOfPeoplePaid={60}
          money="16,000"
        />
        <HoleInOne
          date="24/01/19"
          location="BOSQUES DE SANTA FE"
          holeNumber={8}
          description="DRIVER"
          numberOfPeoplePaid={58}
          money="14,000"
        />
      </Content>
    </Container>
  );
};
