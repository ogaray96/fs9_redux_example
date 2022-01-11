import { ADD_NAME, SET_NAME_VALUE } from '../actions/actionTypes';

const initialValues = {
  name: '',
  names: [],
};

const nameReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_NAME_VALUE:
      return { ...state, name: action.data.value };
    case ADD_NAME:
      return { ...state, names: [...state.names, action.data.value], name: '' };
    default:
      return state;
  }
};

export default nameReducer;
