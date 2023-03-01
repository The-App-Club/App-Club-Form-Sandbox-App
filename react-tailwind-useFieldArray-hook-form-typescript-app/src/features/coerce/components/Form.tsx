import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Spacer from '@/components/Spacer'
import { isNullOrUndefined } from '@/utils/typeUtil'

import PlanTypeSelector from './PlanTypeSelector'
import PointSelector, { POINTS } from './PointSelector'

export enum PlanType {
  PERSONAL = 1,
  BUSINESS = 2,
}

const SomethingFormSchema = z
  .object({
    planId: z
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
    point: z
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
  .superRefine(({ planId, point }, ctx) => {
    if (planId === PlanType.PERSONAL && point > 3000) {
      ctx.addIssue({
        path: ['point'],
        code: 'custom',
        message: '個人プランの場合、3000ポイント以下を選択してください',
      })
    }
    if (planId === PlanType.BUSINESS && point <= 3000) {
      ctx.addIssue({
        path: ['point'],
        code: 'custom',
        message: '法人プランの場合、3001ポイント以上を選択してください',
      })
    }
  })

export type SomethingForm = z.infer<typeof SomethingFormSchema>

const Form = () => {
  const {
    handleSubmit,
    formState: { errors, defaultValues },
    control,
  } = useForm<SomethingForm>({
    resolver: zodResolver(SomethingFormSchema),
    defaultValues: {
      planId: undefined,
      point: POINTS[0],
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
      <PlanTypeSelector control={control} name={'planId'} />
      <Spacer classValue={'h-4'} />
      <PointSelector control={control} name={'point'} />
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
        // disabled={!isValid}
      >
        Do
      </button>
    </form>
  )
}

export default Form
