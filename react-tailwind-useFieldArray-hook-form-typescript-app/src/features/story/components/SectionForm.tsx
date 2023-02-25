import clsx from 'clsx'
import { Control } from 'react-hook-form'

import TextareaDescription from '@/features/story/components/TextareaDescription'
import TextfieldTitle from '@/features/story/components/TextfieldTitle'
import useSectionForm from '@/features/story/hooks/useSectionForm'
import { StoryForm } from '@/features/story/stores/storyForm'

const SectionForm = ({ control }: { control: Control<StoryForm, any> }) => {
  const { fields, handleAdd, handleRemove } = useSectionForm({ control })

  return (
    <div>
      <h2 className='mb-2 block text-lg font-medium text-gray-600 dark:text-white'>
        セクションリスト
      </h2>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className='mb-6'>
            <div className='mb-2 flex items-center justify-between'>
              <h2 className='block text-lg font-medium text-gray-600 dark:text-white'>
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
  )
}

export default SectionForm
