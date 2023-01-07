import { TextField } from '@mui/joy'
import { Control, useController, UseFormSetValue } from 'react-hook-form'

import { BebopForm } from '@/features/liquor/domains/BebopForm'

type BebopFormKeys = keyof BebopForm

const BebopTextfield = ({
  control,
  name,
  setValue,
}: {
  control: Control<BebopForm>
  name: BebopFormKeys
  setValue: UseFormSetValue<BebopForm>
}) => {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
  })

  // console.log(`[BebopTextfield]errors`, errors)

  return <TextField placeholder='カーボーイビバップ' {...field} />
}

export default BebopTextfield
