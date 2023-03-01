import { FC } from 'react'

import clsx from 'clsx'
import { useController, UseControllerProps } from 'react-hook-form'

import { PlanType, SomethingForm } from './Form'

import type { Merge } from 'type-fest'

type NeatType = Merge<UseControllerProps<SomethingForm>, { labelName?: string }>

const PlanTypeSelector: FC<NeatType> = ({
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
      <p className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>{`プランタイプを選んでください`}</p>
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
      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
          <input
            {...field}
            id='planId-personal'
            type='radio'
            name={name}
            value={PlanType.PERSONAL}
            checked={Number(field.value) === PlanType.PERSONAL}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor='planId-personal'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            個人
          </label>
        </div>
        <div className='flex items-center'>
          <input
            {...field}
            id='planId-business'
            type='radio'
            name={name}
            value={PlanType.BUSINESS}
            checked={Number(field.value) === PlanType.BUSINESS}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor='planId-business'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            法人
          </label>
        </div>
      </div>
    </div>
  )
}

export default PlanTypeSelector
