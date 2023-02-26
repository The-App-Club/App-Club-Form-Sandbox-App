import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ChangePasswordForm,
  ChangePasswordFormSchema,
} from '@/features/change-password/stores/changePasswordForm'

const useChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<ChangePasswordForm>({
    defaultValues: {
      email: '',
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    },
    resolver: zodResolver(ChangePasswordFormSchema),
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

export default useChangePasswordForm
