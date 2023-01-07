import { Radio, RadioGroup } from '@mui/joy'
import { Control, useController, UseFormSetValue } from 'react-hook-form'

import { BebopForm } from '@/features/liquor/domains/BebopForm'

type BebopFormKeys = keyof BebopForm

const BebopRadio = ({
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

  return (
    <RadioGroup
      {...field}
      onChange={(e) => {
        setValue(name, Number(e.target.value))
      }}
    >
      <Radio value={1} label='おススメできるものではない' />
      <Radio value={2} label='おススメしなくていい' />
      <Radio value={3} label='おススメしてもしなくてもいい' />
      <Radio value={4} label='おススメしたいかも' />
      <Radio value={5} label='おススメ絶対する' />
    </RadioGroup>
  )
}

export default BebopRadio
