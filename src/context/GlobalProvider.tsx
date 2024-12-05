import { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { gKeySheetMusic } from '../utils/gKeySheetMusic'
import { getRandomIndex } from '../utils/getRandomIndex'
import { KeySheet } from '../types/KeySheet'
import { fKeySheetMusic } from '../utils/fKeySheetMusic'

export const GlobalProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [keySheet, setKeySheet] = useState(KeySheet.Gkey)

  const [keySheetMusicUsed, setKeySheetMusicUsed] = useState(
    keySheet === KeySheet.Gkey ? gKeySheetMusic : fKeySheetMusic
  )

  const [globalNote, setGlobalNote] = useState(
    keySheetMusicUsed[getRandomIndex(18)]
  )

  return (
    <GlobalContext.Provider
      value={{ globalNote, setGlobalNote, keySheet, setKeySheet, keySheetMusicUsed, setKeySheetMusicUsed }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
