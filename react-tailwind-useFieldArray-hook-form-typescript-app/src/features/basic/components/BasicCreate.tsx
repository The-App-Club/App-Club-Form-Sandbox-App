import clsx from 'clsx'

import CreateForm from '@/features/basic/components/CreateForm'

const BasicCreate = () => {
  return (
    <div className={clsx(`mx-auto mt-12 w-full max-w-md`)}>
      <CreateForm />
    </div>
  )
}

export default BasicCreate
