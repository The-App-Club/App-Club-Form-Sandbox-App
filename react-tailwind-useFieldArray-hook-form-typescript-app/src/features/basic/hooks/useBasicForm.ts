import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { BasicForm, BasicFormSchema } from '@/features/basic/stores/basicForm'
import { BasicFormModeAction } from '@/features/basic/stores/basicFormMode'

type ErrorData = Error | null | undefined

const BasicSchema = z.object({
  id: z.number(),
  age: z.number(),
  name: z.string(),
  phone: z.string(),
})

const BasicDataSchema = BasicSchema.deepPartial().nullish()

export type BasicData = z.infer<typeof BasicDataSchema>

const initialData = {
  id: undefined,
  age: 0,
  name: '',
  phone: '',
}

const useBasicForm = (mode: BasicFormModeAction) => {
  const { data, error, refetch } = useQuery<BasicData, ErrorData>({
    queryKey: ['BASIC', mode],
    queryFn: async () => {
      if (mode === BasicFormModeAction.ADD) {
        return initialData
      } else if (mode === BasicFormModeAction.EDIT) {
        const response = await fetch('/data/user.json')
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
  } = useForm<BasicForm>({
    defaultValues,
    resolver: zodResolver(BasicFormSchema),
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

export default useBasicForm
