import { FC, useEffect } from 'react'

import {
  UseControllerProps,
  UseFormSetError,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form'

import {
  QuestionCategory,
  SurveyForm,
} from '@/features/survey/stores/surveyForm'

import ChoiceItems from './ChoiceItems'

import type { Merge } from 'type-fest'

type NeatType = Merge<
  UseControllerProps<SurveyForm>,
  { labelName: string; questionIndex: number }
> & {
  setError: UseFormSetError<SurveyForm>
  setValue: UseFormSetValue<SurveyForm>
}

const AnswerSelector: FC<NeatType> = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  questionIndex,
  setValue,
  setError,
}) => {
  const { questionType, answer } = useWatch({
    control,
    name: `questions.${questionIndex}`,
  })

  useEffect(() => {
    if (!questionType) {
      return
    }
    // @ts-ignore
    if (answer.choices.length === 0) {
      if (questionType === QuestionCategory.SA) {
        setError(`questions.${questionIndex}.answer.choices`, {
          message: '選択肢は1個以上必要です',
        })
      } else if (questionType === QuestionCategory.MA) {
        setError(`questions.${questionIndex}.answer.choices`, {
          message: '選択肢は2個以上必要です',
        })
      } else {
        setError(`questions.${questionIndex}.answer.choices`, {
          message: undefined,
        })
      }
    } else if (
      // @ts-ignore
      answer.choices.length === 1 &&
      questionType === QuestionCategory.MA
    ) {
      setError(`questions.${questionIndex}.answer.choices`, {
        message: '選択肢は2個以上必要です',
      })
    } else {
      setError(`questions.${questionIndex}.answer.choices`, {
        message: undefined,
      })
    }
    // question first reset
    if (questionType !== answer.questionType) {
      setValue(`questions.${questionIndex}.answer.questionType`, questionType)
      setValue(`questions.${questionIndex}.answer.choices`, [])
    }
  }, [questionType, answer, questionIndex, setValue, setError])

  if (questionType !== answer.questionType) {
    // question first
    if (questionType === QuestionCategory.SA) {
      // @ts-ignore
      return <ChoiceItems control={control} questionIndex={questionIndex} />
    } else if (questionType === QuestionCategory.MA) {
      // @ts-ignore
      return <ChoiceItems control={control} questionIndex={questionIndex} />
    } else if (questionType === QuestionCategory.FA) {
      return null
    } else {
      return null
    }
  } else {
    if (
      questionType === QuestionCategory.SA &&
      answer.questionType === QuestionCategory.SA
    ) {
      // @ts-ignore
      return <ChoiceItems control={control} questionIndex={questionIndex} />
    }

    if (
      questionType === QuestionCategory.MA &&
      answer.questionType === QuestionCategory.MA
    ) {
      // @ts-ignore
      return <ChoiceItems control={control} questionIndex={questionIndex} />
    }

    if (questionType === QuestionCategory.FA) {
      return null
    }
  }
  return null
}

export default AnswerSelector
