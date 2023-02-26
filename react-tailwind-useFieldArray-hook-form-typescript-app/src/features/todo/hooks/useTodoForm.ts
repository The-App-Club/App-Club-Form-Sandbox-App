import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TodoForm, TodoFormSchema } from '@/features/todo/stores/todoForm'

const useTodoForm = () => {
  const defaultValues: TodoForm = useMemo(() => {
    return {
      id: 1,
      title: '一日の流れ',
      tasks: [
        {
          id: 1,
          title: 'ご飯食べる',
          done: false,
        },
        {
          id: 2,
          title: 'お風呂入る',
          done: false,
        },
        {
          id: 3,
          title: 'お布団に入る',
          done: false,
        },
      ],
    }
  }, [])

  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<TodoForm>({
    defaultValues,
    resolver: zodResolver(TodoFormSchema),
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

export default useTodoForm
