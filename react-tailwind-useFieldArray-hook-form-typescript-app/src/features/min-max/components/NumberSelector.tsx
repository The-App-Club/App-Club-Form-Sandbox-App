import { FC } from 'react'

import clsx from 'clsx'
import { useController, UseControllerProps } from 'react-hook-form'

import { SomethingForm } from './Form'

import type { Merge } from 'type-fest'

type NeatType = Merge<UseControllerProps<SomethingForm>, { labelName?: string }>

const NumberSelector: FC<NeatType> = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  labelName,
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
    <div>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        {`${labelName}`}
      </label>
      {!!error?.message && (
        <p
          className={clsx(
            `my-2 font-bold`,
            // @ts-ignore
            !!error?.message && clsx(`text-red-500 dark:text-white`)
          )}
        >
          {/* @ts-ignore */}
          {error?.message}
        </p>
      )}
      <input
        {...field}
        type='number'
        id={name}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus-visible:ring-1 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      />
    </div>
  )
}

export default NumberSelector
