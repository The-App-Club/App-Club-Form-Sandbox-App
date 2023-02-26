import { useMemo } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'

import { basicFormModeState } from '@/features/basic/stores/basicFormMode'

const useBasicFormMode = () => {
  const setActiveBasicFormMode = useSetRecoilState(basicFormModeState)
  const activeBasicFormMode = useRecoilValue(basicFormModeState)
  const { mode } = useMemo(() => {
    return { ...activeBasicFormMode }
  }, [activeBasicFormMode])
  return useMemo(() => {
    return {
      setActiveBasicFormMode,
      mode,
    }
  }, [setActiveBasicFormMode, mode])
}

export default useBasicFormMode
