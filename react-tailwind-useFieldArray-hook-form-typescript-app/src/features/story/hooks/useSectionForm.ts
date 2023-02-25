import { useCallback, useMemo } from 'react'

import { Control, useFieldArray } from 'react-hook-form'

import { StoryForm } from '@/features/story/stores/storyForm'

const useSectionForm = ({ control }: { control: Control<StoryForm, any> }) => {
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'sections', // unique name for your Field Array
  })

  const handleAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      append({ id: -1, title: '', description: '' })
    },
    [append]
  )

  const handleRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      e.stopPropagation()
      remove(index)
    },
    [remove]
  )

  return useMemo(() => {
    return {
      fields,
      handleAdd,
      handleRemove,
    }
  }, [fields, handleAdd, handleRemove])
}

export default useSectionForm
