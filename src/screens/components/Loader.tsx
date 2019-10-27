import React from 'react';
import { css } from 'css-rn';
import { Spinner } from 'native-base';

const spinnerStyle = css`
  width: 30px;
  height: 30px;
`;

export const Loader = () => (
  <Spinner color="white" style={spinnerStyle} />
);
