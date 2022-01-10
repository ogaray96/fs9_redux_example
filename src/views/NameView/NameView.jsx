import React from 'react';
import NameFormProvider from '../../utils/hooks/NameFormProvider';

import { NameContainer, NameForm } from './components';

import './styles.css';

const NameView = () => {
  return (
    <NameFormProvider>
      <div className="name-view">
        <NameContainer />
        <NameForm />
      </div>
    </NameFormProvider>
  );
};

export default NameView;
