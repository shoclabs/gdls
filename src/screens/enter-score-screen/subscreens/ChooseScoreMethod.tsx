import React from 'react';
import { Button, Content, Text } from 'native-base';
import { css } from 'css-rn';
import { withRouter } from 'react-router';

import { Divider } from '../../components/Divider';

import { colors } from '../../../theme/colors';

const firstButtonStyle = css`
  background-color: ${colors.green};
`;

const secondButtonStyle = css`
  background-color: ${colors.blue};
`;

const thirdButtonStyle = css`
  background-color: ${colors.red};
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin: 28px 20px 0 20px;
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
`;

const descriptionStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  margin: 40px 25px;
  color: ${colors.darkBlue};
  text-align: center;
`;
export const ChooseScoreMethod = withRouter(({ history }) => (
  <Content padder>
    <Text style={descriptionStyle}>
      {`CHOOSE YOUR INPUT METHOD FOR THIS ROUND:`}
    </Text>
    <Button style={[firstButtonStyle, buttonStyle]} onPress={() => history.push('/enter-score/my')}>
      <Text style={buttonTextStyle}>STABLEFORD SCORE</Text>
    </Button>
    <Button style={[secondButtonStyle, buttonStyle]} onPress={() => history.push('/enter-score/scorecard')}>
      <Text style={buttonTextStyle}>SCORECARD</Text>
    </Button>
    <Button style={[thirdButtonStyle, buttonStyle]} onPress={() => history.push('/enter-score/other')}>
      <Text style={buttonTextStyle}>OTHER PLAYER STABLEFORD</Text>
    </Button>
    <Divider height={200} />
  </Content>
));
