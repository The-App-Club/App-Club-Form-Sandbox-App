import { z } from 'zod'

export const BasicFormSchema = z.object({
  id: z.number().nullish(),
  name: z.string().min(1, '必須入力です').nullable(),
  age: z
    .custom<Number>()
    .refine(
      // minLowercase https://github.com/knicola/yup-password/blob/master/index.js#L12-L23
      (value: Number) => {
        return value >= 0
      },
      (value: Number) => {
        return { message: `0歳以上で入力してください` }
      }
    )
    .transform((value, ctx) => {
      return Number(value)
    }),
  // https://github.com/sakatam/a-better-jp-phone-regex
  phone: z
    .string()
    .regex(
      /^0[789]0-?\d{4}-?\d{4}$/,
      `xxx-yyyy-zzzzの形式ないしはハイフンなしの形式で入力してください`
    ),
})

export type BasicForm = z.infer<typeof BasicFormSchema>
