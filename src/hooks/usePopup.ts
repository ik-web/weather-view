import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const usePopup = () => useContext(AppContext);
