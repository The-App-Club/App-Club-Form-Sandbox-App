import clsx from 'clsx'

import EditForm from '@/features/basic/components/EditForm'

const BasicEdit = () => {
  return (
    <div className={clsx(`mx-auto mt-12 w-full max-w-md`)}>
      <EditForm />
    </div>
  )
}

export default BasicEdit
