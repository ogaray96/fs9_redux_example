import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { setNameValue } from '../../../../actions';

const NameForm = ({ value, dispatch }) => {
  const handleChange = (e) => {
    dispatch(setNameValue(e.target.value));
  };

  return (
    <form>
      <input
        placeholder="Ingrese su nombre"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

NameForm.propTypes = {
  value: string.isRequired,
};

export default connect((state) => ({ value: state.nameReducer.name }))(
  NameForm,
);
