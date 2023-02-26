import clsx from 'clsx'

import EditForm from '@/features/survey/components/EditForm'

const SurveyEdit = () => {
  return (
    <div className={clsx(`mx-auto mt-12 w-full max-w-md`)}>
      <EditForm />
    </div>
  )
}

export default SurveyEdit
