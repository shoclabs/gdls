import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { HIOStatistics } from '../my-profile-screen/components/HIOStatistics';

import { colors } from '../../theme/colors';
import { numberToString } from '../../utils/number-to-string';

const containerStyle = css`
  margin: 8px 0 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const rowStyle = css`
  flex-direction: row;
  padding: 0 15px;
  width: 100%;
`;

const valueStyle = css`
  text-align: center;
  flex: 1;
  font-family: open-sans-extra-bold;
  font-size: 22px;
  color: ${colors.blue};
`;

const headerStyle = css`
  text-align: center;
  flex: 1;
  font-family: open-sans-extra-bold;
  font-size: 11px;
  color: ${colors.blue};
`;

const dividerStyle = css`
  margin-top: 20px;
`;

const rightSeparatorStyle = css`
  border-right-width: 2px;
  border-right-color: ${colors.green};
  border-right-style: solid;
  flex: 1;
`;

const leftSeparatorStyle = css`
  border-left-width: 2px;
  border-left-color: ${colors.green};
  border-left-style: solid;
  flex: 1;
`;

const pointAverageValueStyle = css`
  text-align: center;
  color: ${colors.blue};
  font-family: open-sans-extra-bold;
  font-size: 22px;
`;

const pointAverageHeaderStyle = css`
  text-align: center;
  color: ${colors.blue};
  font-family: open-sans-extra-bold;
  font-size: 11px;
  margin-bottom: 24px;
`;

const partialContainerStyle = css`
  display: flex;
  flex-direction: row;
`;

const partialContentStyle = css`
  display: flex;
  flex-direction: column;
  width: 80px;
`;

const shadowRowStyle = css`
  padding: 12px 0;
  background-color: ${colors.lightGrey}; 
`;

const nonShadowRowStyle = css`
  padding: 12px 0;
`;

interface IUserStatistics {
  won: number;
  money: number;
  hcp: number;
  played: number;
  percentWon: number;
  percentLost: number;
  averageScore: number;
  loseCount?: number;
  hioCount?: number;
  hioOwed?: number;
  type?: 'full' | 'partial'
}

export const UserStatistics = ({ won, money, hcp, played, percentWon, percentLost, averageScore, type, loseCount, hioCount, hioOwed }: IUserStatistics) => {
  const finalType = type || 'full';
  return (
    <View style={containerStyle}>
      {finalType === 'partial' &&
        <View style={partialContainerStyle}>
          <View style={partialContentStyle}>
            <Text style={pointAverageValueStyle}>{averageScore.toFixed(0)}</Text>
            <Text style={pointAverageHeaderStyle}>POINTS AVERAGE</Text>
          </View>
          <View style={partialContentStyle}>
            <Text style={pointAverageValueStyle}>{hcp.toFixed(0)}</Text>
            <Text style={pointAverageHeaderStyle}>HCP</Text>
          </View>
        </View>}
      {finalType === 'full' &&
        <>
          <View style={nonShadowRowStyle}>
            <View style={rowStyle}>
              <View style={rightSeparatorStyle}><Text style={valueStyle}>{hcp}</Text></View>
              <Text style={valueStyle}>{played}</Text>
              <View style={leftSeparatorStyle}><Text style={valueStyle}>{averageScore.toFixed(0)}</Text></View>
            </View>
            <View style={rowStyle}>
              <Text style={headerStyle}>HCP</Text>
              <Text style={headerStyle}>PLAYED</Text>
              <Text style={headerStyle}>PTS AVG</Text>
            </View>
          </View>

          <View style={shadowRowStyle}>
            <View style={rowStyle}>
              <View style={rightSeparatorStyle}><Text style={valueStyle}>{won}</Text></View>
              <Text style={valueStyle}>{percentWon.toFixed(0)}</Text>
              <View style={leftSeparatorStyle}>
                <Text style={valueStyle}>{numberToString(parseInt(money.toFixed(0)))}</Text>
              </View>
            </View>
            <View style={rowStyle}>
              <Text style={headerStyle}>WIN</Text>
              <Text style={headerStyle}>WIN %</Text>
              <Text style={headerStyle}>$</Text>
            </View>
          </View>

          <View style={nonShadowRowStyle}>
            <View style={rowStyle}>
              <View style={rightSeparatorStyle}><Text style={valueStyle}>{loseCount}</Text></View>
              <Text style={valueStyle}>{percentLost.toFixed(0)}</Text>
            </View>
            <View style={rowStyle}>
              <Text style={headerStyle}>MP</Text>
              <Text style={headerStyle}>MP %</Text>
            </View>
          </View>
          <HIOStatistics hioCount={hioCount} hioOwed={hioOwed} />
        </>}
    </View>
  );
};
