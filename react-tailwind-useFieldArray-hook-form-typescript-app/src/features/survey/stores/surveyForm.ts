import { z } from 'zod'

import { QuestionSchema, SurveySchema } from '@/features/survey/domains/survey'

export enum QuestionCategory {
  SA = 'Single Answer',
  MA = 'Multiple Answer',
  FA = 'Free Answer',
}

const ChoiceSchema = z.object({
  id: z.number().nullish(),
  text: z.string().min(1, '必須入力です').nullable(),
})

// https://qiita.com/kalbeekatz/items/09df07f78420ab6b6e57
const AnswerSelectorSchema = z.union([
  z.object({
    questionType: z.literal(QuestionCategory.SA),
    choices: ChoiceSchema.array().min(1, '選択肢は1個以上必要です').nullable(),
  }),
  z.object({
    questionType: z.literal(QuestionCategory.MA),
    choices: ChoiceSchema.array().min(2, '選択肢は2個以上必要です').nullable(),
  }),
  z.object({
    questionType: z.literal(QuestionCategory.FA),
  }),
])

export const QuestionFormSchema = QuestionSchema.extend({
  id: z.number().nullish(),
  title: z.string().min(1, '必須入力です').nullable(),
  questionType: z.custom<QuestionCategory>().nullable(),
  answer: AnswerSelectorSchema,
})

export const SurveyFormSchema = SurveySchema.extend({
  id: z.number().nullish(),
  title: z.string().min(1, '必須入力です').nullable(),
  questions: QuestionFormSchema.array()
    .min(1, '質問を設定してください')
    .nullable(),
})

export type SurveyForm = z.infer<typeof SurveyFormSchema>

export const initialData: SurveyForm = {
  id: undefined,
  title: 'Super Pretty Neat Survey',
  questions: [
    {
      id: undefined,
      title: '後世に残したいイチオシのアニメを以下から一つ選択してください',
      questionType: QuestionCategory.SA,
      answer: {
        questionType: QuestionCategory.SA,
        choices: [
          {
            id: 1,
            text: 'カーボーイビバップ',
          },
          {
            id: 2,
            text: 'シティハンター',
          },
          {
            id: 3,
            text: 'リコリス・リコイル',
          },
          {
            id: 4,
            text: '先輩がうざい後輩の話',
          },
          {
            id: 5,
            text: 'オッドタクシー',
          },
        ],
      },
    },
    {
      id: undefined,
      title: '最近自然災害が多いと思いますか？',
      questionType: QuestionCategory.MA,
      answer: {
        questionType: QuestionCategory.MA,
        choices: [
          {
            id: 1,
            text: 'そうは全く思わない',
          },
          {
            id: 2,
            text: 'そうは思わない',
          },
          {
            id: 3,
            text: 'どちらでもない',
          },
          {
            id: 4,
            text: 'そう思う',
          },
          {
            id: 5,
            text: 'とてもそう思う',
          },
        ],
      },
    },
  ],
}
