import { Piano } from '../components/Piano'
import { Scoreboard } from '../components/Scoreboard'
import { SheetMusic } from '../components/SheetMusic'

export function GuessNote() {
  return (
    <main className="flex flex-col items-center w-full">
      <Scoreboard />
      <SheetMusic />
      <Piano />
    </main>
  )
}
