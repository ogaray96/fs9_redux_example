import { SET_NAME_VALUE } from './actionTypes';

export const setNameValue = (value) => {
  return {
    type: SET_NAME_VALUE,
    data: {
      value,
    },
  };
};
