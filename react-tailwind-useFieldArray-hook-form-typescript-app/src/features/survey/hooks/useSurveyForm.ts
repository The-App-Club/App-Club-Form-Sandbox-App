import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { SurveyData } from '@/features/survey/domains/survey'
import {
  initialData,
  SurveyForm,
  SurveyFormSchema,
} from '@/features/survey/stores/surveyForm'
import { SurveyFormModeAction } from '@/features/survey/stores/surveyFormMode'
import { ErrorData } from '@/types/error'

const useSurveyForm = (mode: SurveyFormModeAction) => {
  const { data, error, refetch } = useQuery<SurveyData, ErrorData>({
    queryKey: ['BASIC', mode],
    queryFn: async () => {
      if (mode === SurveyFormModeAction.ADD) {
        return initialData
      } else if (mode === SurveyFormModeAction.EDIT) {
        const response = await fetch('/data/survey.json')
        const data = await response.json()
        return data
      } else {
        return
      }
    },
    onSuccess: function (data) {},
    onError: function (error) {},
    onSettled: function (data, error) {},
  })

  const defaultValues = useMemo(() => {
    return data || initialData
  }, [data])

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<SurveyForm>({
    defaultValues,
    resolver: zodResolver(SurveyFormSchema),
    mode: 'all',
  })

  return useMemo(() => {
    return {
      defaultValues,
      control,
      watch,
      reset,
      getValues,
      setValue,
      register,
      handleSubmit,
      errors,
      isValid,
    }
  }, [
    defaultValues,
    control,
    watch,
    reset,
    getValues,
    setValue,
    register,
    handleSubmit,
    errors,
    isValid,
  ])
}

export default useSurveyForm
