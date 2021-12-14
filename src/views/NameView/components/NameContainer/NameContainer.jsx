import React from 'react';

import useNameFormContext from '../../../../utils/hooks/useNameFormContext';

import './styles.css';

const NameContainer = () => {
  const { store } = useNameFormContext();

  return (
    <div className="name-container">
      <h4>{store.name}</h4>
    </div>
  );
};

export default NameContainer;
