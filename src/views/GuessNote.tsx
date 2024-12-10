import { Piano } from '../components/Piano'
import { SheetMusic } from '../components/SheetMusic'

export function GuessNote() {
  return (
    <main className="flex flex-col items-center w-full">
      <SheetMusic />
      <Piano />
    </main>
  )
}
