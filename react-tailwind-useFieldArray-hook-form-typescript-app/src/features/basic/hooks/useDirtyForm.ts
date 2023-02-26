import { useMemo } from 'react'

import { flatten } from 'flat'

import useBasicForm from '@/features/basic/hooks/useBasicForm'
import { BasicFormModeAction } from '@/features/basic/stores/basicFormMode'
import { isNullOrUndefined } from '@/utils/typeUtil'

const useDirtyForm = (dirtyFormValues?: any) => {
  const { defaultValues } = useBasicForm(BasicFormModeAction.EDIT)

  const isNotChanged = useMemo(() => {
    const flattenedDefaultFormValues: any = flatten(defaultValues)
    const flattenedDirtyFormValues: any = flatten(dirtyFormValues)
    return Object.keys(flattenedDefaultFormValues).reduce((acc, cur) => {
      if (isNullOrUndefined(flattenedDirtyFormValues[cur])) {
        return acc
      }
      if (cur === 'age') {
        return (
          acc &&
          Number(flattenedDefaultFormValues[cur]) ===
            Number(flattenedDirtyFormValues[cur])
        )
      }
      return (
        acc && flattenedDefaultFormValues[cur] === flattenedDirtyFormValues[cur]
      )
    }, true)
  }, [defaultValues, dirtyFormValues])

  return useMemo(() => {
    return { isNotChanged }
  }, [isNotChanged])
}

export default useDirtyForm
