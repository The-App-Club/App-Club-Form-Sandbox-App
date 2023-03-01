import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Spacer from '@/components/Spacer'
import { isNullOrUndefined } from '@/utils/typeUtil'

import NumberSelector from './NumberSelector'

const SomethingFormSchema = z
  .object({
    min: z
      .custom<Number>()
      .refine(
        (value) => {
          return !isNullOrUndefined(value)
        },
        (value) => {
          return {
            message: '必須入力です',
          }
        }
      )
      .nullable()
      .transform((value) => {
        return Number(value)
      }),
    max: z
      .custom<Number>()
      .refine(
        (value) => {
          return !isNullOrUndefined(value)
        },
        (value) => {
          return {
            message: '必須入力です',
          }
        }
      )
      .nullable()
      .transform((value) => {
        return Number(value)
      }),
  })
  .superRefine(({ min, max }, ctx) => {
    if (min > max) {
      ctx.addIssue({
        path: ['min'],
        code: 'custom',
        message: '"最小値"は"最大値"よりも小さくしてください',
      })
    }
    if (max <= min) {
      ctx.addIssue({
        path: ['max'],
        code: 'custom',
        message: '"最大値"は"最小値"より大きくしてください',
      })
    }
  })

export type SomethingForm = z.infer<typeof SomethingFormSchema>

const Form = () => {
  const {
    handleSubmit,
    formState: { errors, defaultValues, isValid },
    control,
  } = useForm<SomethingForm>({
    resolver: zodResolver(SomethingFormSchema),
    defaultValues: {
      min: 0,
      max: 1,
    },
    mode: 'all',
  })

  const onSubmit = (data: SomethingForm) => {
    console.log(data)
  }

  return (
    <form
      className={clsx(`w-full max-w-xl p-8 shadow-neat`)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <NumberSelector labelName={`最小値`} control={control} name={'min'} />
      <Spacer classValue={'h-2'} />
      <NumberSelector labelName={`最大値`} control={control} name={'max'} />
      <Spacer classValue={'h-6'} />
      <hr className='w-full' />
      <Spacer classValue={'h-6'} />
      <button
        type='submit'
        className={clsx(
          `w-full rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-700 focus:ring-blue-700`,
          `focus-visible:border-blue-700 focus-visible:ring-blue-700`,
          `dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300`,
          `disabled:bg-blue-200`
        )}
        disabled={!isValid}
      >
        Do
      </button>
    </form>
  )
}

export default Form
