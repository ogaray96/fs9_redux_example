import { SET_NAME_VALUE } from '../actions/actionTypes';

const initialValues = {
  name: '',
};

const nameReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_NAME_VALUE:
      return { ...state, name: action.data.value };
    default:
      return state;
  }
};

export default nameReducer;
