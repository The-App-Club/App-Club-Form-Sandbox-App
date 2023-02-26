import { FC } from 'react'

import clsx from 'clsx'
import { useController, UseControllerProps } from 'react-hook-form'

import { BasicForm } from '@/features/basic/stores/basicForm'

import type { Merge } from 'type-fest'

type NeatType = Merge<
  UseControllerProps<BasicForm>,
  { labelName: string; placeholder: string; type: 'number' | 'text' }
>

const TextfieldName: FC<NeatType> = ({
  labelName = 'お名前',
  placeholder = 'カーボーイビバップ',
  type,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
}) => {
  const {
    field,
    formState: { defaultValues },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        className='mb-2 block text-lg font-medium text-gray-600 dark:text-white'
      >
        {labelName}
      </label>
      {/* @ts-ignore */}
      <input
        type={type}
        id={name}
        className={clsx(
          `block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg font-bold`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-500 focus:ring-blue-500`,
          `focus-visible:border-blue-500 focus-visible:ring-blue-500`,
          `dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`
        )}
        placeholder={placeholder}
        required
        {...field}
      />
      <p>{!!error && error.message}</p>
    </div>
  )
}

export default TextfieldName
