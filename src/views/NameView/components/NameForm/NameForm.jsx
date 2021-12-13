import React from 'react';
import { string, func } from 'prop-types';

const NameForm = ({ value, handleChange }) => {
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
  handleChange: func.isRequired,
};

export default NameForm;
