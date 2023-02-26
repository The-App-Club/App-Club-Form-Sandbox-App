import { z } from 'zod'

const TaskSchema = z.object({
  id: z.number().nullish(),
  title: z.string().min(1, '必須入力です').nullable(),
  done: z.boolean(),
})

export const TodoFormSchema = z.object({
  id: z.number().nullish(),
  title: z.string().min(1, '必須入力です').nullable(),
  tasks: TaskSchema.array(),
})

export type TodoForm = z.infer<typeof TodoFormSchema>
