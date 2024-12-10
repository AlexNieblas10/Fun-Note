import { useState } from 'react'
import { GuessNoteContext } from './GuessNoteContext'

export const GuessNoteProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)

  return (
    <GuessNoteContext.Provider
      value={{ correct, setCorrect, incorrect, setIncorrect }}
    >
      {children}
    </GuessNoteContext.Provider>
  )
}
