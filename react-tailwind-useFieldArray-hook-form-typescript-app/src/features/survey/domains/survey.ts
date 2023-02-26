import { z } from 'zod'

export const QuestionSchema = z.object({
  id: z.number(),
  title: z.string(),
})

export const SurveySchema = z.object({
  id: z.number(),
  title: z.string(),
  questions: QuestionSchema.array(),
})

const SurveyDataSchema = SurveySchema.nullish()
const SurveyPartialDataSchema = SurveySchema.deepPartial().nullish()
export type SurveyData = z.infer<typeof SurveyDataSchema>
export type SurveyPartialData = z.infer<typeof SurveyPartialDataSchema>
