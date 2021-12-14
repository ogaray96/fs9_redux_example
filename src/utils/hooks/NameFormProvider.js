const React = require('react');
const { node } = require('prop-types');

const NameFormContext = require('./nameFormContext');
const useNameFormReducer = require('./useNameFormReducer');
const { SET_NAME_VALUE } = require('./actionTypes');

const NameFormProvider = ({ children }) => {
  const [store, dispatch] = useNameFormReducer();

  const handleChange = (event) =>
    dispatch({
      type: SET_NAME_VALUE,
      data: {
        value: event.target.value,
      },
    });

  return (
    <NameFormContext.Provider value={{ store, dispatch, handleChange }}>
      {children}
    </NameFormContext.Provider>
  );
};

NameFormProvider.propTypes = {
  children: node.isRequired,
};

export default NameFormProvider;
