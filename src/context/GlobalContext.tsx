import { createContext } from 'react'
import { GlobalContextType } from '../types/contextTypes/GlobalContextType'

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)