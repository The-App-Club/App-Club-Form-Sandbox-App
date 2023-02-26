import clsx from 'clsx'
import { useController, UseControllerProps } from 'react-hook-form'

import { StoryForm } from '@/features/story/stores/storyForm'

import type { Merge } from 'type-fest'

type NeatType = Merge<UseControllerProps<StoryForm>, { labelName: string }>

const TextfieldTitle = (props: NeatType) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })
  return (
    <div className='w-full'>
      <label
        htmlFor='title'
        className='mb-2 block text-lg font-medium text-gray-600 dark:text-white'
      >
        {props.labelName}
      </label>
      {/* @ts-ignore */}
      <input
        type='text'
        id='title'
        className={clsx(
          `block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg font-bold`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-500 focus:ring-blue-500`,
          `focus-visible:border-blue-500 focus-visible:ring-blue-500`,
          `dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`
        )}
        placeholder=''
        required
        {...field}
      />
      <p>{!!error && error.message}</p>
    </div>
  )
}

export default TextfieldTitle
