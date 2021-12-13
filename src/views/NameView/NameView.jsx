import React, { useState } from 'react';

import { NameContainer, NameForm } from './components';

import './styles.css';

const NameView = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="name-view">
      <NameContainer value={value} />
      <NameForm handleChange={handleChange} value={value} />
    </div>
  );
};

export default NameView;
