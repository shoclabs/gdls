import React from 'react';
import { css } from 'css-rn';
import { Spinner } from 'native-base';

const spinnerStyle = css`
  width: 30px;
  height: 30px;
`;

interface ILoaderProps {
  color?: string;
}

export const Loader = ({ color }: ILoaderProps) => (
  <Spinner color={color || 'white'} style={spinnerStyle} />
);
