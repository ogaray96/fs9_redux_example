import React from 'react';

import { NameContainer, NameForm } from './components';

import './styles.css';

const NameView = () => {
  return (
    <div className="name-view">
      <NameContainer />
      <NameForm />
    </div>
  );
};

export default NameView;
