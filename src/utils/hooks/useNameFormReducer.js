const { useReducer } = require('react');
const { SET_NAME_VALUE } = require('./actionTypes');

const nameReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME_VALUE:
      return { ...state, name: action.data.value };
    default:
      return state;
  }
};

const initialValues = {
  name: '',
};

function useFormReducer() {
  return useReducer(nameReducer, initialValues);
}

module.exports = useFormReducer;

