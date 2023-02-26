import clsx from 'clsx'

import Form from '@/features/todo/components/Form'

const Todo = () => {
  return (
    <div className={clsx(`mx-auto mt-12 w-full max-w-md`)}>
      <Form />
    </div>
  )
}

export default Todo
