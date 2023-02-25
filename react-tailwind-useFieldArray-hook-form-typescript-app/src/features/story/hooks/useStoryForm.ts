import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { StoryForm, StoryFormSchema } from '@/features/story/stores/storyForm'

const useStoryForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<StoryForm>({
    defaultValues: {
      id: 1,
      title: 'something title 1',
      sections: [
        {
          id: 1,
          title: 'something title 1',
          description: 'something description 1',
        },
        {
          id: 2,
          title: 'something title 2',
          description: 'something description 2',
        },
      ],
    },
    resolver: zodResolver(StoryFormSchema),
    mode: 'all',
  })

  return useMemo(() => {
    return {
      control,
      reset,
      getValues,
      setValue,
      register,
      handleSubmit,
      errors,
      isValid,
    }
  }, [
    control,
    reset,
    getValues,
    setValue,
    register,
    handleSubmit,
    errors,
    isValid,
  ])
}

export default useStoryForm
