import clsx from 'clsx'

import NiceButton from '@/features/change-password/components/NiceButton'
import TextfieldEmail from '@/features/change-password/components/TextfieldEmail'
import TextfieldPassword from '@/features/change-password/components/TextfieldPassword'
import useChangePasswordForm from '@/features/change-password/hooks/useChangePasswordForm'
import { ChangePasswordForm } from '@/features/change-password/stores/changePasswordForm'

const Form = () => {
  const { handleSubmit, control } = useChangePasswordForm()

  const onSubmit = (data: ChangePasswordForm) => {
    console.log(data)
  }

  return (
    <form
      className={clsx(`w-full max-w-full`)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextfieldEmail
        labelName='メールアドレス'
        name='email'
        control={control}
      />
      <TextfieldPassword
        labelName='現在のパスワード'
        name='currentPassword'
        control={control}
      />
      <TextfieldPassword
        labelName='新しいパスワード'
        name='newPassword'
        control={control}
      />
      <TextfieldPassword
        labelName='新しいパスワード（確認）'
        name='newPasswordConfirm'
        control={control}
      />
      <NiceButton />
    </form>
  )
}

export default Form
