export interface GuessNoteContextType {
  correct: number
  setCorrect: React.Dispatch<React.SetStateAction<number>>
  incorrect: number
  setIncorrect: React.Dispatch<React.SetStateAction<number>>
}
