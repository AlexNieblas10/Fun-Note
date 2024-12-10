import { useContext } from 'react';
import { GuessNoteContext } from '../context/GuessNoteContext';

export const useGuessNoteContext = () => {
  const context = useContext(GuessNoteContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
