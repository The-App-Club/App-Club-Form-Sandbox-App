import { atom } from 'recoil'
import { z } from 'zod'

export enum SurveyFormModeAction {
  ADD = 'Add',
  EDIT = 'Edit',
}

type SurveyFormModeType = {
  mode: SurveyFormModeAction
}

const SurveyFormModeSchema = z.custom<SurveyFormModeType>()

export type SurveyFormMode = z.infer<typeof SurveyFormModeSchema>

const surveyFormModeState = atom<SurveyFormMode>({
  key: 'surveyFormMode',
  default: {
    mode: SurveyFormModeAction.ADD,
  },
})

export { surveyFormModeState }
