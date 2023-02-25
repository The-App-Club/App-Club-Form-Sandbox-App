import clsx from 'clsx'
import { useFieldArray } from 'react-hook-form'

import NiceButton from '@/features/story/components/NiceButton'
import TextareaDescription from '@/features/story/components/TextareaDescription'
import TextfieldTitle from '@/features/story/components/TextfieldTitle'
import useStoryForm from '@/features/story/hooks/useStoryForm'
import { StoryForm } from '@/features/story/stores/storyForm'

const Form = () => {
  const { handleSubmit, control } = useStoryForm()

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'sections', // unique name for your Field Array
  })

  const onSubmit = (data: StoryForm) => {
    console.log(data)
  }

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    append({ id: -1, title: '', description: '' })
  }

  const handleRemove = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.stopPropagation()
    remove(index)
  }

  return (
    <form
      className={clsx(`w-full max-w-full`)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextfieldTitle
        name='title'
        control={control}
        labelName={`ストーリータイトル`}
      />
      <div>
        <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
          セクションリスト
        </h2>
        {fields.map((field, index) => {
          return (
            <div
              key={field.id}
              className='sticky top-0 z-10 mb-6 rounded-lg bg-white p-6 shadow-inner'
            >
              <div className='mb-2 flex items-center justify-between'>
                <h2 className='block border-l-2 border-blue-500 pl-2 text-lg font-medium text-gray-600 dark:text-white'>
                  {`セクション${index + 1}`}
                </h2>
                <button
                  onClick={(e) => {
                    handleRemove(e, index)
                  }}
                  type='button'
                  className={clsx(
                    `rounded-lg bg-cerise-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-cerise-700`,
                    `focus:outline-none focus:ring-1`,
                    `focus:border-cerise-700 focus:ring-cerise-700`,
                    `focus-visible:border-cerise-700 focus-visible:ring-cerise-700`,
                    `dark:bg-cerise-300 dark:hover:bg-cerise-300 dark:focus:ring-cerise-300`
                  )}
                >
                  セクションを削除する
                </button>
              </div>

              <hr />

              <TextfieldTitle
                name={`sections.${index}.title`}
                control={control}
                labelName={`セクションタイトル`}
              />
              <TextareaDescription
                name={`sections.${index}.description`}
                control={control}
                labelName={`説明文`}
              />
            </div>
          )
        })}
        <button
          onClick={handleAdd}
          type='button'
          className={clsx(
            `w-full rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700`,
            `focus:outline-none focus:ring-1`,
            `focus:border-teal-700 focus:ring-teal-700`,
            `focus-visible:border-teal-700 focus-visible:ring-teal-700`,
            `dark:bg-teal-300 dark:hover:bg-teal-300 dark:focus:ring-teal-300`
          )}
        >
          セクションを追加する
        </button>
      </div>
      <NiceButton />
    </form>
  )
}

export default Form
