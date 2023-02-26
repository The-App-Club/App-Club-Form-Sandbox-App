import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  // cost: z.number().max(100, 'Something went wrong...'),
  cost: z.custom<Number>().refine(
    (value) => {
      return value <= 3000
    },
    (value) => {
      return {
        message: `${3000}以下にしてください`,
      }
    }
  ),
})

type Schema = z.infer<typeof schema>

const COSTS = [1000, 2000, 3000, 5000, 10000] as const
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      cost: COSTS[0],
    },
    mode: 'all',
  })
  console.log(watch('cost'), errors)
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <select {...register('cost')}>
        {COSTS.map((cost) => (
          <option key={cost} value={cost}>
            {cost}
          </option>
        ))}
      </select>
      <p>{!!errors.cost && errors.cost?.message}</p>
      <button type='submit'>送信</button>
    </form>
  )
}

export default Form
