import { FC } from 'react'

import clsx from 'clsx'
import { useController, UseControllerProps } from 'react-hook-form'

import { SomethingForm } from './Form'

import type { Merge } from 'type-fest'

export const POINTS = [1000, 2000, 3000, 5000, 10000] as const

type NeatType = Merge<UseControllerProps<SomethingForm>, { labelName?: string }>

const PointSelector: FC<NeatType> = ({
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
    <div>
      <label
        htmlFor='point'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        ポイントを選んでください
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

      {/* @ts-ignore */}
      <select
        id='point'
        {...field}
        value={`${field.value || POINTS[0]}`}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        {POINTS.map((point, index) => (
          <option key={point} value={point}>
            {point}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PointSelector
