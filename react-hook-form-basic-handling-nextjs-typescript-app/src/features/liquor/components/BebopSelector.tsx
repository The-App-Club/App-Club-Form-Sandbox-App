import { Option, Select } from '@mui/joy'
import { Control, useController, UseFormSetValue } from 'react-hook-form'

import { BebopForm } from '@/features/liquor/domains/BebopForm'

type BebopFormKeys = keyof BebopForm

const BebopSelector = ({
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
    <Select
      {...field}
      onChange={(e, value) => {
        if (value) {
          setValue(name, value)
        }
      }}
    >
      <Option value='ビバップ号'>ビバップ号</Option>
      <Option value='ソードフィッシュⅡ'>ソードフィッシュⅡ</Option>
      <Option value='レッドテイル'>レッドテイル</Option>
      <Option value='ハンマーヘッド'>ハンマーヘッド</Option>
    </Select>
  )
}

export default BebopSelector
