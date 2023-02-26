import clsx from 'clsx'

import Spacer from '@/components/Spacer'
import AnswerSelector from '@/features/survey/components/AnswerSelector'
import QuestionTypeSelector from '@/features/survey/components/QuestionTypeSelector'
import TextfieldName from '@/features/survey/components/TextfieldName'
import useSurveyForm from '@/features/survey/hooks/useSurveyForm'
import useSurveyQuestionForm from '@/features/survey/hooks/useSurveyQuestionForm'
import { SurveyForm } from '@/features/survey/stores/surveyForm'
import { SurveyFormModeAction } from '@/features/survey/stores/surveyFormMode'

const CreateForm = () => {
  const { handleSubmit, control, isValid, errors, setValue } = useSurveyForm(
    SurveyFormModeAction.ADD
  )
  const { fields, handleAdd, handleDelete } = useSurveyQuestionForm({ control })

  console.log(errors)
  const onSubmit = (data: SurveyForm) => {
    console.log(data)
  }

  return (
    <form className={clsx(`w-full`)} onSubmit={handleSubmit(onSubmit)}>
      <TextfieldName
        type='text'
        labelName='調査タイトル'
        placeholder={'好きなアニメについて'}
        name='title'
        control={control}
      />
      <div className='flex flex-col items-center gap-6'>
        {fields.map((field, index) => {
          return (
            <div
              key={field.id}
              className={`w-full rounded-lg p-2 shadow-inner`}
            >
              <h2 className='text-xl font-bold'>{`#${index + 1}`}</h2>

              <TextfieldName
                type='text'
                labelName={`質問タイトル`}
                placeholder={'後世に残したいイチオシのアニメは何でしょうか？'}
                name={`questions.${index}.title`}
                control={control}
              />

              <QuestionTypeSelector
                labelName={`質問形式`}
                name={`questions.${index}.questionType`}
                control={control}
              />

              <AnswerSelector
                labelName={`回答形式`}
                questionIndex={index}
                name={`questions.${index}`}
                control={control}
                setValue={setValue}
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
        追加する
      </button>
      <Spacer classValue={`h-12`} />
      <button
        type='submit'
        className={clsx(
          `w-full rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-700 focus:ring-blue-700`,
          `focus-visible:border-blue-700 focus-visible:ring-blue-700`,
          `dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300`,
          `disabled:bg-blue-200`
        )}
        disabled={!isValid}
      >
        Create Survey
      </button>
    </form>
  )
}

export default CreateForm
