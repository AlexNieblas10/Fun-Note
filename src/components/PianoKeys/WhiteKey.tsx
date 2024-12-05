import { useState } from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { KeyInfoSound } from '../../types/KeyInfoSound'
import { StateKey } from '../../types/StateKey'
import { getRandomIndex } from '../../utils/getRandomIndex'

export const WhiteKey = ({ data }: { data: KeyInfoSound }) => {
  const { globalNote, setGlobalNote, keySheetMusicUsed } = useGlobalContext()
  const [isCorrect, setIsCorrect] = useState(StateKey.NONE)

  async function clickKey() {
    //Al ser correcto hacer:
    if (globalNote.name[0] === data.name[0]) {
      const audio = new Audio(data.sound)
      audio.play()
      
      setIsCorrect(StateKey.CORRECT)
      let newNote = keySheetMusicUsed[getRandomIndex(18)]
      while (newNote.number === globalNote.number) {
        newNote = keySheetMusicUsed[getRandomIndex(18)]
      }
      setGlobalNote(keySheetMusicUsed[getRandomIndex(18)])
    } else {
      setIsCorrect(StateKey.INCORRECT)
    }
  }

  function endTransition() {
    setIsCorrect(StateKey.NONE)
  }

  return (
    <li
      onClick={clickKey}
      onTransitionEnd={endTransition}
      className={`first:border-l-2 border-r-2 w-12 h-48 border-b-2 border-t-2 rounded-b-lg shadow-shadowKey cursor-pointer transition-colors duration-300 ${
        isCorrect === StateKey.CORRECT
          ? 'bg-green-600 shadow-none'
          : isCorrect === StateKey.INCORRECT
          ? 'bg-red-600 shadow-none'
          : ''
      }`}
    ></li>
  )
}
