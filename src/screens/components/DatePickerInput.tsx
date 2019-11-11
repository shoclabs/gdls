import React from 'react';
import DatePicker from 'react-native-datepicker'

import { colors } from '../../theme/colors';

const style = { width: '100%', paddingLeft: 30, paddingRight: 30 };

const customStyles = {
  dateIcon: {
    display: 'none',
  },
  dateTouchBody: {
    width: '100%',
    height: 50,
  },
  btnTextCancel: {
    fontFamily: 'open-sans-extra-bold',
    fontSize: 18,
  },
  btnTextConfirm: {
    fontFamily: 'open-sans-extra-bold',
    fontSize: 18,
    color: colors.darkBlue,
  },
  placeholderText: {
    fontFamily: 'open-sans-regular',
    color: colors.darkBlue,
    marginLeft: 20,
  },
  dateInput: {
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 3,
    height: 50,
    alignItems: 'flex-start',
  },
  dateText: {
    fontFamily: 'open-sans-regular',
    color: colors.darkBlue,
    marginLeft: 20,
  },
};

export const DatePickerInput = ({ date, onChange }) => {
  return (
    <DatePicker
      style={style}
      date={date}
      mode="date"
      placeholder="Date"
      format="DD-MM-YYYY"
      confirmBtnText="SELECT"
      cancelBtnText="CANCEL"
      customStyles={customStyles}
      onDateChange={onChange}
    />
  );
};
