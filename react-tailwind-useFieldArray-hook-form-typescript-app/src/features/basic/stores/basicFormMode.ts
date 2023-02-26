import { atom } from 'recoil'
import { z } from 'zod'

export enum BasicFormModeAction {
  ADD = 'Add',
  EDIT = 'Edit',
}

type BasicFormModeType = {
  mode: BasicFormModeAction
}

const BasicFormModeSchema = z.custom<BasicFormModeType>()

export type BasicFormMode = z.infer<typeof BasicFormModeSchema>

const basicFormModeState = atom<BasicFormMode>({
  key: 'basicFormMode',
  default: {
    mode: BasicFormModeAction.ADD,
  },
})

export { basicFormModeState }
