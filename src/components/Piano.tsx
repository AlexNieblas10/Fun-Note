import { octave } from '../utils/octave'
import { BlackKey } from './PianoKeys/BlackKey'
import { WhiteKey } from './PianoKeys/WhiteKey'

export const Piano = () => {
  return (
    <>
      <ul className="flex">
        {octave.map((nota) =>
          nota.isBlackKey ? (
            <BlackKey key={nota.name[0]} />
          ) : (
            <WhiteKey key={nota.name[0]} data={nota} />
          )
        )}
      </ul>
    </>
  )
}
