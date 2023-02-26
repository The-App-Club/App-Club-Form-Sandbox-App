import { useCallback, useMemo } from 'react'

import { Control, useFieldArray } from 'react-hook-form'

import {
  QuestionCategory,
  SurveyForm,
} from '@/features/survey/stores/surveyForm'

const useSurveyQuestionForm = ({
  control,
}: {
  control: Control<SurveyForm>
}) => {
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'questions', // unique name for your Field Array
  })

  const handleAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      append({
        id: undefined,
        title: '',
        questionType: QuestionCategory.SA,
        answer: {
          questionType: QuestionCategory.SA,
          choices: [],
        },
      })
    },
    [append]
  )

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      e.stopPropagation()
      remove(index)
    },
    [remove]
  )

  return useMemo(() => {
    return {
      fields,
      handleAdd,
      handleDelete,
    }
  }, [fields, handleAdd, handleDelete])
}

export default useSurveyQuestionForm
