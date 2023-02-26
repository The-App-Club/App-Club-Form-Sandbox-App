import clsx from 'clsx'
import { Control, FieldArrayWithId } from 'react-hook-form'

import QuestionTypeSelector from '@/features/survey/components/QuestionTypeSelector'
import TextfieldName from '@/features/survey/components/TextfieldName'
import { SurveyForm } from '@/features/survey/stores/surveyForm'

const QuestionSubForm = ({
  index,
  control,
  field,
  handleDelete,
}: {
  index: number
  control: Control<SurveyForm, any>
  field: FieldArrayWithId<SurveyForm, 'questions', 'id'>
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void
}) => {
  return (
    <div
      key={field.id} // important to include key with field's id
      className={`w-full`}
    >
      <TextfieldName
        type='text'
        labelName={`質問タイトル${index + 1}`}
        placeholder={'後世に残したいイチオシのアニメは何でしょうか？'}
        name={`questions.${index}.title`}
        control={control}
      />

      <QuestionTypeSelector
        labelName={`質問形式`}
        name={`questions.${index}.questionType`}
        control={control}
      />

      <div className='flex w-full items-center justify-end'>
        <button
          onClick={(e) => {
            handleDelete(e, index)
          }}
          type='button'
          className={clsx(
            `rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700`,
            `focus:outline-none focus:ring-1`,
            `focus:border-red-700 focus:ring-red-700`,
            `focus-visible:border-red-700 focus-visible:ring-red-700`,
            `dark:bg-red-300 dark:hover:bg-red-300 dark:focus:ring-red-300`,
            `disabled:bg-red-200`
          )}
        >
          削除する
        </button>
      </div>
    </div>
  )
}

export default QuestionSubForm
