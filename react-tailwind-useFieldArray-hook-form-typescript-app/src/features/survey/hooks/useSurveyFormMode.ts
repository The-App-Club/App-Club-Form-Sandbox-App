import { useMemo } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'

import { basicFormModeState } from '@/features/basic/stores/basicFormMode'

const useSurveyFormMode = () => {
  const setActiveSurveyFormMode = useSetRecoilState(basicFormModeState)
  const activeSurveyFormMode = useRecoilValue(basicFormModeState)
  const { mode } = useMemo(() => {
    return { ...activeSurveyFormMode }
  }, [activeSurveyFormMode])
  return useMemo(() => {
    return {
      setActiveSurveyFormMode,
      mode,
    }
  }, [setActiveSurveyFormMode, mode])
}

export default useSurveyFormMode
