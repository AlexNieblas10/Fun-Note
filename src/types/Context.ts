import { KeyInfo } from './KeyInfo'
import { KeySheet } from './KeySheet'

export interface Context {
  globalNote: KeyInfo
  setGlobalNote: React.Dispatch<React.SetStateAction<KeyInfo>>
  keySheet: KeySheet
  setKeySheet: React.Dispatch<React.SetStateAction<KeySheet>>
  keySheetMusicUsed: KeyInfo[]
  setKeySheetMusicUsed: React.Dispatch<React.SetStateAction<KeyInfo[]>>
}
