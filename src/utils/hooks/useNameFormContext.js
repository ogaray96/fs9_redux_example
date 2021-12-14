import { useContext } from 'react';
import nameFormContext from './nameFormContext';

const useNameFormContext = () => useContext(nameFormContext);

export default useNameFormContext;
