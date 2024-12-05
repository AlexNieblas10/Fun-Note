import { Note } from "./Note"


export const Space = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <li className="relative h-6 flex justify-center items-center">
      {isSelected && <Note />}
    </li>
  )
}
