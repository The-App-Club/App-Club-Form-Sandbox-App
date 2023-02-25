import { z } from 'zod'

export const SectionFormSchema = z.object({
  id: z.number().nullish(),
  title: z.string().min(1, '必須入力です').nullable(),
  description: z.string().min(1, '必須入力です').nullable(),
})

export const StoryFormSchema = z.object({
  id: z.number().nullish(),
  title: z.string().min(1, '必須入力です').nullable(),
  sections: SectionFormSchema.array().nullish(),
})

export type StoryForm = z.infer<typeof StoryFormSchema>
