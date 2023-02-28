import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const OptionSchema = z.object({
  id: z.number().refine(
    (value) => {
      return value !== -1
    },
    (value) => {
      return {
        message: '少なくとも一つは選択してください',
      }
    }
  ),
  name: z.string(),
})

type Option = z.infer<typeof OptionSchema>

const OPTIONS = [
  {
    id: -1,
    name: '選択してください',
  },
  {
    id: 1,
    name: '項目1',
  },
  {
    id: 2,
    name: '項目2',
  },
]

const lookUp = (value: number | null | undefined) => {
  return OPTIONS.find((option) => {
    return option.id === value
  })
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Option>({
    resolver: zodResolver(OptionSchema),
    defaultValues: OPTIONS[0],
    mode: 'all',
  })
  console.log(watch('id'), errors)
  return (
    <form onSubmit={handleSubmit((data) => console.log(lookUp(data.id)))}>
      <select {...register('id', { valueAsNumber: true })}>
        {OPTIONS.map((option, index) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <p>{!!errors.id && errors.id?.message}</p>
      <button type='submit'>送信</button>
    </form>
  )
}

export default Form
