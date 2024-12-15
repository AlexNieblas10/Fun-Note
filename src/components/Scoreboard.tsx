import { useGuessNoteContext } from '../hooks/useGuessNoteContext'

export const Scoreboard = () => {
  const { correct, incorrect } = useGuessNoteContext()
  return (
    <div className="w-full lg:w-1/2 flex justify-center gap-4 p-4">
      <aside className="w-1/2 bg-green-500 text-center rounded-md">
        <span className="font-medium text-xl">Correct: {correct}</span>
      </aside>
      <aside className="w-1/2 bg-red-500 text-center rounded-md">
        <span className="font-medium text-xl">Inorrect: {incorrect}</span>
      </aside>
    </div>
  )
}
