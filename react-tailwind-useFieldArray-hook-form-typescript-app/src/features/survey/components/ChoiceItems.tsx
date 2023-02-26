import clsx from 'clsx'
import { Control } from 'react-hook-form'

import Spacer from '@/components/Spacer'
import TextfieldName from '@/features/survey/components/TextfieldName'
import useSurveyQuestionAnswerChoiceForm from '@/features/survey/hooks/useSurveyQuestionAnswerChoiceForm'
import { SurveyForm } from '@/features/survey/stores/surveyForm'

const ChoiceItems = ({
  questionIndex,
  control,
}: {
  questionIndex: number
  control: Control<SurveyForm>
}) => {
  const { fields, handleAdd, handleDelete } = useSurveyQuestionAnswerChoiceForm(
    // @ts-ignore
    { control, questionIndex }
  )
  return (
    <>
      <div className='flex flex-col items-center gap-6 pl-2 pt-2'>
        {fields.map((field, index) => {
          return (
            <div
              key={field.id}
              className={`w-full rounded-lg p-2 shadow-inner`}
            >
              <h2 className='text-xl font-bold'>{`Q${questionIndex + 1}-A${
                index + 1
              }`}</h2>
              <TextfieldName
                type='text'
                labelName={`選択肢${index + 1}`}
                placeholder={''}
                name={`questions.${questionIndex}.answer.choices.${index}.text`}
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
        })}
      </div>
      <Spacer classValue={`h-2`} />
      <hr className='w-full' />
      <Spacer classValue={`h-2`} />
      <button
        onClick={handleAdd}
        type='button'
        className={clsx(
          `rounded-lg bg-gray-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700`,
          `focus:outline-none focus:ring-1`,
          `focus:border-gray-700 focus:ring-gray-700`,
          `focus-visible:border-gray-700 focus-visible:ring-gray-700`,
          `dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-300`,
          `disabled:bg-gray-200`
        )}
      >
        選択肢を追加する
      </button>
    </>
  )
}

export default ChoiceItems
