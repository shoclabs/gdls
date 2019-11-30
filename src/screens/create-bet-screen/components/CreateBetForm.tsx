import React, { useState } from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { css } from 'css-rn';
import { gql } from 'apollo-boost';
import { getApolloContext, useMutation, useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { useHistory } from 'react-router';
import { get, isNil, uniq } from 'lodash';
import { Platform } from 'react-native';

import { DatePickerInput } from '../../components/DatePickerInput';
import { Loader } from '../../components/Loader';
import { Separator } from '../../components/Separator';
import { ErrorMessage } from '../../components/ErrorMessage';
import { PageLoader } from '../../components/PageLoader';
import { SearchResultList } from '../../enter-score-screen/components/search-users-section/SearchResultList';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  margin-top: 55px;
  ${Platform.OS === 'android' ? 'height: 1300px;' : ''}
`;

const inputStyle = css`
  color: ${colors.darkBlue};
  font-family: open-sans-regular;
  font-size: 14px;
`;

const inputContainerStyle = css`
  margin: 30px 30px 0 30px;
  border-color: ${colors.green};
  border-width: 2px;
  border-radius: 3px;
  padding: 0 10px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${colors.green};
  margin: 30px 30px 0 30px;
`;

const buttonTextStyle = css`
  font-family: open-sans-extra-bold;
`;

const customSearchStyle = css`
  margin: -3px 30px 0 30px;
  border: solid 2px ${colors.green};
`;

const MY_BETS_QUERY = gql`
  {
    me {
      id
      betsGroups {
        id
        name
        bets {
          id
          date
          amount
          nextAdvantage
          course
        }
      }
    }
  }
`;

const ADD_BET_TO_BETS_GROUP = gql`
  mutation ADD_BET_TO_BETS($date: DateTime!, $amount: Float!, $betsGroupId: EntityId!, $course: String!, $currentAdvantage: Float!, $nextAdvantage: Float!) {
    createBet(input: { date: $date, amount: $amount, betsGroup: { id: $betsGroupId }, course: $course, currentAdvantage: $currentAdvantage, nextAdvantage: $nextAdvantage }) {
      id
    }
  }
`;

export const CreateBetForm = ({ formik, loading, error }) => {
  const { values, handleSubmit, handleChange } = formik;
  const [nameIsSelected, setNameIsSelected] = useState(false);
  const [courseIsSelected, setCourseIsSelected] = useState(false);
  const { data, loading: dataLoading } = useQuery(MY_BETS_QUERY);
  const { client } = React.useContext(getApolloContext());
  const history = useHistory();
  const [addBetToBetsGroup, { loading: addBetToBetsLoading, error: addBetToBetsError }]
    = useMutation(ADD_BET_TO_BETS_GROUP);
  if (dataLoading) {
    return <PageLoader />;
  }
  const { me: { betsGroups } } = data;
  const betsGroupsCoursesTemp = [];
  betsGroups.forEach(betsGroup => betsGroup.bets.forEach(bet => betsGroupsCoursesTemp.push(bet.course)));
  const betsGroupsCourses = uniq(betsGroupsCoursesTemp);
  const handleAddBetToBetsGroup = async () => {
    const { course, amount, currentAdvantage, nextAdvantage } = values;
    const betsGroupId = betsGroups.filter(betGroup => betGroup.name === values.name)[0].id;
    const date = moment(values.date, 'DD-MM-YYYY').format('MM-DD-YYYY');
    const betVariables = {
      date,
      amount: parseInt(amount),
      course,
      betsGroupId,
      currentAdvantage: parseInt(currentAdvantage),
      nextAdvantage: parseInt(nextAdvantage),
    };
    const betResult = await addBetToBetsGroup({ variables: betVariables });
    if (get(betResult, 'data.createBet.id')) {
      await client.resetStore();
      history.push('/side-bets');
    }
  };
  const namesResult = values.name.length > 0 ?
    betsGroups
    .map(betsGroup => betsGroup.name)
    .filter(name => name.toUpperCase().indexOf(values.name.toUpperCase()) > -1) :
    [];
  const courseResult = values.course.length > 0 ?
    betsGroupsCourses.filter(name => name.toUpperCase().indexOf(values.course.toUpperCase()) > -1) :
    [];
  const handleChangeName = (value) => {
    handleChange('name')(value);
    setNameIsSelected(true);
    const betsGroup = betsGroups.filter(item => item.name === value);
    if (betsGroup.length > 0) {
      const bets = get(betsGroup, `[0].bets`);
      const betsLength = get(bets, 'length');
      const lastBetNextAdvantage = get(bets, `[${betsLength - 1}].nextAdvantage`);
      if (!isNil(lastBetNextAdvantage)) {
        return handleChange('currentAdvantage')(lastBetNextAdvantage.toString());
      }
      handleChange('currentAdvantage')('');
    }
  };
  return (
    <View style={containerStyle}>
      <DatePickerInput date={values.date} onChange={handleChange('date')} />
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Enter new or select existing name"
          onChangeText={value => { handleChange('name')(value); setNameIsSelected(false); }}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
          value={values.name}
        />
      </Item>
      <SearchResultList
        users={nameIsSelected ? [] : namesResult.map((name: string) => ({ id: name, firstName: name, lastName: '' }))}
        loading={false}
        onSelect={handleChangeName}
        customContainerStyle={customSearchStyle}
      />
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Course"
          onChangeText={value => { handleChange('course')(value); setCourseIsSelected(false); }}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
          value={values.course}
        />
      </Item>
      <SearchResultList
        users={courseIsSelected ? [] : courseResult.map((name: string) => ({ id: name, firstName: name, lastName: '' }))}
        loading={false}
        onSelect={value => { handleChange('course')(value); setCourseIsSelected(true); }}
        customContainerStyle={customSearchStyle}
      />
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Amount"
          onChangeText={handleChange('amount')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Current Advantage"
          onChangeText={handleChange('currentAdvantage')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
          value={values.currentAdvantage}
        />
      </Item>
      <Item regular style={inputContainerStyle}>
        <Input
          style={inputStyle}
          placeholder="Next Advantage"
          onChangeText={handleChange('nextAdvantage')}
          selectionColor={colors.darkBlue}
          placeholderTextColor={colors.darkBlue}
        />
      </Item>
      <Separator />
      {(error || addBetToBetsError) && <ErrorMessage text="Unable to create new bet." />}
      <Button style={buttonStyle} onPress={nameIsSelected ? handleAddBetToBetsGroup : handleSubmit}>
        {(loading || addBetToBetsLoading) ? <Loader /> : <Text style={buttonTextStyle}>SUBMIT</Text>}
      </Button>
    </View>
  );
};
