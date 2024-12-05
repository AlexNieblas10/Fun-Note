import { createContext } from 'react'
import { Context } from '../types/Context'

export const GlobalContext = createContext<Context | undefined>(undefined)