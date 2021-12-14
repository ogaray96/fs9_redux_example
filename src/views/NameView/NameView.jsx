import React, { useState } from 'react';
import NameFormProvider from '../../utils/hooks/NameFormProvider';

import { NameContainer, NameForm } from './components';

import './styles.css';

const NameView = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <NameFormProvider>
      <div className="name-view">
        <NameContainer value={value} />
        <NameForm handleChange={handleChange} value={value} />
      </div>
    </NameFormProvider>
  );
};

export default NameView;
