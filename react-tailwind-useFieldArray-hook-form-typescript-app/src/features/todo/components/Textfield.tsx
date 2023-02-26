import clsx from 'clsx'
import { Control, FieldPath, useController } from 'react-hook-form'

import { TodoForm } from '@/features/todo/stores/todoForm'

const Textfield = ({
  name,
  control,
  placeholder,
  labelName,
  disabled = false,
}: {
  name: FieldPath<TodoForm>
  control: Control<TodoForm>
  labelName: string
  placeholder: string
  disabled?: boolean
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
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
        type='text'
        id={name}
        className={clsx(
          `block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg font-bold`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-500 focus:ring-blue-500`,
          `focus-visible:border-blue-500 focus-visible:ring-blue-500`,
          `dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`,
          !!error &&
            clsx(
              `focus:border-red-500 focus:ring-red-500`,
              `focus-visible:border-red-500 focus-visible:ring-red-500`,
              `dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500`
            )
        )}
        placeholder={placeholder}
        required
        {...field}
        disabled={disabled}
      />
      {!!error && (
        <p
          className={clsx(
            `pt-2 font-bold`,
            !!error && clsx(`text-red-500 dark:text-white`)
          )}
        >
          {!!error && error.message}
        </p>
      )}
    </div>
  )
}

export default Textfield
