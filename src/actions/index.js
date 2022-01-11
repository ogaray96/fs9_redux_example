import { ADD_NAME, SET_NAME_VALUE } from './actionTypes';

export const setNameValue = (value) => {
  return {
    type: SET_NAME_VALUE,
    data: {
      value,
    },
  };
};

export const addName = (value) => {
  return {
    type: ADD_NAME,
    data: {
      value,
    },
  };
};
