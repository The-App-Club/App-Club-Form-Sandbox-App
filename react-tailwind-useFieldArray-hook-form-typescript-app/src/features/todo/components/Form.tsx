import React from 'react'

import clsx from 'clsx'
import { useFieldArray } from 'react-hook-form'

import Spacer from '@/components/Spacer'
import Textfield from '@/features/todo/components/Textfield'
import useTodoForm from '@/features/todo/hooks/useTodoForm'
import { TodoForm } from '@/features/todo/stores/todoForm'

const Form = () => {
  const { handleSubmit, control, isValid, errors, getValues } = useTodoForm()

  const { fields, prepend, append, remove, insert } = useFieldArray({
    control,
    name: 'tasks',
  })

  const handleDone = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.stopPropagation()
    const values = getValues()
    // @ts-ignore
    if (!!(errors?.tasks?.slice(index, 1).length === 0)) {
      return
    }
    insert(index, {
      id: undefined,
      done: !values.tasks[index].done,
      title: values.tasks[index].title,
    })
    remove(index + 1)
  }

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.stopPropagation()
    remove(index)
  }

  const handleBefore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    prepend({
      id: undefined,
      title: '',
      done: false,
    })
  }

  const handleAfter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    append({
      id: undefined,
      title: '',
      done: false,
    })
  }

  const onSubmit = (data: TodoForm) => {
    console.log(data)
  }

  return (
    <form
      className={clsx(`w-full max-w-full`)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Textfield
        labelName='今日のTODO'
        placeholder='一日の流れ'
        name='title'
        control={control}
      />

      <button
        onClick={handleBefore}
        type='button'
        className={clsx(
          `w-full rounded-lg bg-gray-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700`,
          `focus:outline-none focus:ring-1`,
          `focus:border-gray-700 focus:ring-gray-700`,
          `focus-visible:border-gray-700 focus-visible:ring-gray-700`,
          `dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-300`
        )}
      >
        先頭に追加
      </button>
      <Spacer classValue={`h-4`} />
      {fields.map((field, index) => (
        <div
          key={field.id}
          className={clsx(
            `rounded-xl p-4 shadow-2xl`,
            field.done &&
              clsx(`
            bg-slate-200 opacity-25
          `)
          )}
        >
          <div className='flex w-full items-center justify-between'>
            <h2 className='text-xl font-bold'>{`#${index + 1}`}</h2>
            <div className='flex items-center gap-2'>
              <button
                onClick={(e) => {
                  handleDone(e, index)
                }}
                type='button'
                className={clsx(
                  `rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700`,
                  `focus:outline-none focus:ring-1`,
                  `focus:border-emerald-700 focus:ring-emerald-700`,
                  `focus-visible:border-emerald-700 focus-visible:ring-emerald-700`,
                  `dark:bg-emerald-300 dark:hover:bg-emerald-300 dark:focus:ring-emerald-300`,
                  `disabled:bg-emerald-700 disabled:opacity-40`,
                  field.done && clsx(`disabled:bg-slate-200`)
                )}
              >
                {`${field.done ? '未完了' : '完了'}にする`}
              </button>
              <button
                onClick={(e) => {
                  handleDelete(e, index)
                }}
                type='button'
                className={clsx(
                  `rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700`,
                  `focus:outline-none focus:ring-1`,
                  `focus:border-red-700 focus:ring-red-700`,
                  `focus-visible:border-red-700 focus-visible:ring-red-700`,
                  `dark:bg-red-300 dark:hover:bg-red-300 dark:focus:ring-red-300`
                )}
              >
                タスクを削除
              </button>
            </div>
          </div>
          <Textfield
            labelName='タスク'
            placeholder='お風呂入る'
            name={`tasks.${index}.title`}
            control={control}
            disabled={field.done}
          />
        </div>
      ))}
      <Spacer classValue={`h-4`} />
      <button
        onClick={handleAfter}
        type='button'
        className={clsx(
          `w-full rounded-lg bg-gray-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700`,
          `focus:outline-none focus:ring-1`,
          `focus:border-gray-700 focus:ring-gray-700`,
          `focus-visible:border-gray-700 focus-visible:ring-gray-700`,
          `dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-300`
        )}
      >
        末尾に追加
      </button>
      <Spacer classValue={`h-8`} />
      <hr className='w-full' />
      <Spacer classValue={`h-8`} />
      <button
        disabled={!isValid}
        type='submit'
        className={clsx(
          `w-full rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-700 focus:ring-blue-700`,
          `focus-visible:border-blue-700 focus-visible:ring-blue-700`,
          `dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300`,
          `disabled:bg-blue-200`
        )}
      >
        Bebop
      </button>
    </form>
  )
}

export default Form
