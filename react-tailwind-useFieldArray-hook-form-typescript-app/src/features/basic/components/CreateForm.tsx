import clsx from 'clsx'

import NiceButton from '@/features/basic/components/NiceButton'
import TextfieldName from '@/features/basic/components/TextfieldName'
import useBasicForm from '@/features/basic/hooks/useBasicForm'
import { BasicForm } from '@/features/basic/stores/basicForm'
import { BasicFormModeAction } from '@/features/basic/stores/basicFormMode'

const CreateForm = () => {
  const { handleSubmit, control, isValid } = useBasicForm(
    BasicFormModeAction.ADD
  )
  const onSubmit = (data: BasicForm) => {
    console.log(data)
  }

  return (
    <form
      className={clsx(`w-full max-w-full`)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextfieldName
        type='text'
        labelName='お名前'
        placeholder={'カーボーイビバップ'}
        name='name'
        control={control}
      />
      <TextfieldName
        type='number'
        labelName='年齢'
        placeholder={'30'}
        name='age'
        control={control}
      />
      <TextfieldName
        type='text'
        labelName='電話番号'
        placeholder={'090-1234-5678'}
        name='phone'
        control={control}
      />
      <NiceButton disabled={!isValid} />
    </form>
  )
}

export default CreateForm
