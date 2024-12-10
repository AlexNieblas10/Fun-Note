import { KeySheet } from "../enums/KeySheet"
import { KeyInfo } from "../KeyInfo"


export interface GlobalContextType {
  globalNote: KeyInfo
  setGlobalNote: React.Dispatch<React.SetStateAction<KeyInfo>>
  keySheet: KeySheet
  setKeySheet: React.Dispatch<React.SetStateAction<KeySheet>>
  keySheetMusicUsed: KeyInfo[]
  setKeySheetMusicUsed: React.Dispatch<React.SetStateAction<KeyInfo[]>>
}
