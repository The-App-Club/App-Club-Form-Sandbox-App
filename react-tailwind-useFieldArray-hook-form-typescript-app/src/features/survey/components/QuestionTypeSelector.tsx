import { FC } from 'react'

import clsx from 'clsx'
import { FieldErrors, useController, UseControllerProps } from 'react-hook-form'

import {
  QuestionCategory,
  SurveyForm,
} from '@/features/survey/stores/surveyForm'

import type { Merge } from 'type-fest'

type NeatType = Merge<UseControllerProps<SurveyForm>, { labelName: string }> & {
  errors: FieldErrors<SurveyForm>
  questionIndex: number
}

const QuestionTypeSelector: FC<NeatType> = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  errors,
  questionIndex,
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

  console.log(`errors`, errors)

  return (
    <div className='flex flex-col items-center gap-2'>
      {!!(errors.questions && errors.questions[questionIndex]) && (
        <p
          className={clsx(
            `pt-2 font-bold`,
            // @ts-ignore
            !!errors.questions[questionIndex]?.answer?.choices?.message &&
              clsx(`text-red-500 dark:text-white`)
          )}
        >
          {/* @ts-ignore */}
          {errors.questions[questionIndex]?.answer?.choices?.message}
        </p>
      )}
      <div className='flex items-center gap-2'>
        <div className='flex items-center hover:cursor-pointer'>
          <input
            {...field}
            id={`question-category-${name}-${QuestionCategory.SA}`}
            type='radio'
            value={QuestionCategory.SA}
            checked={field.value === QuestionCategory.SA}
            name={name}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 hover:cursor-pointer focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800  dark:focus:ring-blue-600'
          />
          <label
            htmlFor={`question-category-${name}-${QuestionCategory.SA}`}
            className='ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer  dark:text-gray-300'
          >
            {QuestionCategory.SA}
          </label>
        </div>
        <div className='flex items-center hover:cursor-pointer'>
          <input
            {...field}
            id={`question-category-${name}-${QuestionCategory.MA}`}
            type='radio'
            value={QuestionCategory.MA}
            checked={field.value === QuestionCategory.MA}
            name={name}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 hover:cursor-pointer focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800  dark:focus:ring-blue-600'
          />
          <label
            htmlFor={`question-category-${name}-${QuestionCategory.MA}`}
            className='ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer  dark:text-gray-300'
          >
            {QuestionCategory.MA}
          </label>
        </div>
        <div className='flex items-center hover:cursor-pointer'>
          <input
            {...field}
            id={`question-category-${name}-${QuestionCategory.FA}`}
            type='radio'
            value={QuestionCategory.FA}
            checked={field.value === QuestionCategory.FA}
            name={name}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 hover:cursor-pointer focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800  dark:focus:ring-blue-600'
          />
          <label
            htmlFor={`question-category-${name}-${QuestionCategory.FA}`}
            className='ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer  dark:text-gray-300'
          >
            {QuestionCategory.FA}
          </label>
        </div>
      </div>
    </div>
  )
}

export default QuestionTypeSelector
