import React from 'react';

import useNameFormContext from '../../../../utils/hooks/useNameFormContext';

const NameForm = () => {
  const { store, handleChange } = useNameFormContext();

  return (
    <form>
      <input
        placeholder="Ingrese su nombre"
        onChange={handleChange}
        value={store.name}
      />
    </form>
  );
};

export default NameForm;
