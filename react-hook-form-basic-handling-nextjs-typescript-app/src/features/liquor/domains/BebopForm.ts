import { z } from 'zod'

export const BebopFormSchema = z.object({
  name: z.string().min(1, '必須入力です'),
  meca: z.string(),
  recommend: z.number(),
})

export type BebopForm = z.infer<typeof BebopFormSchema>
