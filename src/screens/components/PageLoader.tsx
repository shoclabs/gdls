import React from 'react';
import { Container, Content } from 'native-base';
import { css } from 'css-rn';

import { Loader } from './Loader';

import { colors } from '../../theme/colors';

const contentStyle = css`
  align-items: center;
`;

const loaderStyle = css`
  margin-top: 30px;
`;

export const PageLoader = () => {
  return (
    <Container>
      <Content contentContainerStyle={[contentStyle, loaderStyle]}>
        <Loader color={colors.green} />
      </Content>
    </Container>
  );
};
