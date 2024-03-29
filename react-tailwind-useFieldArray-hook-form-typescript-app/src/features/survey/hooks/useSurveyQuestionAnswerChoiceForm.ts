import { useCallback, useMemo } from 'react'

import { Control, useFieldArray } from 'react-hook-form'

import { SurveyForm } from '@/features/survey/stores/surveyForm'

const useSurveyQuestionAnswerChoiceForm = ({
  control,
  questionIndex,
}: {
  control: Control<SurveyForm>
  questionIndex: number
}) => {
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: `questions.${questionIndex}.answer.choices`, // unique name for your Field Array
  })

  const handleAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      append({
        id: undefined,
        text: '',
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

export default useSurveyQuestionAnswerChoiceForm
