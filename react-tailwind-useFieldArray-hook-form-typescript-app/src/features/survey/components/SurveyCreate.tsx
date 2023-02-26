import clsx from 'clsx'

import CreateForm from '@/features/survey/components/CreateForm'

const SurveyCreate = () => {
  return (
    <div className={clsx(`mx-auto mt-12 w-full max-w-xl`)}>
      <CreateForm />
    </div>
  )
}

export default SurveyCreate
