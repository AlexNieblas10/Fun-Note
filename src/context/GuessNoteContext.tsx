import { createContext } from 'react'
import { GuessNoteContextType } from '../types/contextTypes/GuessNoteContextType'

export const GuessNoteContext = createContext<GuessNoteContextType | undefined>(
  undefined
)
