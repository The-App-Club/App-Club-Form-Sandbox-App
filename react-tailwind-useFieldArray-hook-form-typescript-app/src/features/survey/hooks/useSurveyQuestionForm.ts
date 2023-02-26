import { useCallback, useMemo } from 'react'

import { Control, useFieldArray, UseFormSetError } from 'react-hook-form'

import {
  QuestionCategory,
  SurveyForm,
} from '@/features/survey/stores/surveyForm'

const useSurveyQuestionForm = ({
  control,
  setError,
}: {
  control: Control<SurveyForm>
  setError: UseFormSetError<SurveyForm>
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
      setError(`questions`, {
        message: undefined,
      })
    },
    [append, setError]
  )

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      e.stopPropagation()
      remove(index)
      if (fields.length - 1 === 0) {
        setError(`questions`, {
          message: '質問を設定してください',
        })
      }
    },
    [remove, fields, setError]
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
