import { KeyInfo } from '../types/KeyInfo'
import { WidthSize } from '../types/WidthSize'

export function checkWidth(noteKey: KeyInfo, globalNote: KeyInfo): WidthSize {
  if (noteKey.number >= 6 && noteKey.number <= 14) {
    return WidthSize.LONG
  } else if (
    (noteKey.number > 14 && noteKey.number <= globalNote.number) ||
    (noteKey.number < 6 && noteKey.number >= globalNote.number)
  ) {
    return WidthSize.SMALL
  }
  return WidthSize.NONE
}
