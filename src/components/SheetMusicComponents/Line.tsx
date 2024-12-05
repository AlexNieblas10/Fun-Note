import { WidthSize } from '../../types/WidthSize'
import { Note } from './Note'

export const Line = ({
  isSelected,
  width,
}: {
  isSelected: boolean
  width: WidthSize
}) => {
  let widthStyle: string

  if (width === WidthSize.NONE) {
    widthStyle = 'border-transparent'
  } else if (width === WidthSize.SMALL) {
    widthStyle = 'w-11'
  } else {
    widthStyle = 'w-full'
  }
  return (
    <li
      className={`${widthStyle} border-2 border-black h-0 relative flex justify-center items-center`}
    >
      {isSelected && <Note />}
    </li>
  )
}
