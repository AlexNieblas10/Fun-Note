import { useGlobalContext } from '../hooks/useGlobalContext'
import { Line } from './SheetMusicComponents/Line'
import { Space } from './SheetMusicComponents/Space'
import { checkWidth } from '../utils/checkWidth'
import gKey from '../assets/gKey.png'
import fKey from '../assets/fKey.png'
import { KeySheet } from '../types/enums/KeySheet'

export const SheetMusic = () => {
  const { globalNote, keySheetMusicUsed, keySheet } = useGlobalContext()

  return (
    <div className="w-full flex justify-center">
      <ul className="p-4 flex flex-col items-center relative lg:w-1/2 w-full">
        {keySheetMusicUsed
          .reverse()
          .map((noteKey) =>
            noteKey.number % 2 === 0 ? (
              <Line
                key={noteKey.number}
                isSelected={noteKey.number === globalNote.number}
                width={checkWidth(noteKey, globalNote)}
              />
            ) : (
              <Space
                key={noteKey.number}
                isSelected={noteKey.number === globalNote.number}
              />
            )
          )}
        <img
          src={keySheet === KeySheet.Gkey ? gKey : fKey}
          className={`${keySheet === KeySheet.Gkey ? 'top-8' : 'top-16'} w-28 absolute  left-5`}
        />
      </ul>
    </div>
  )
}
