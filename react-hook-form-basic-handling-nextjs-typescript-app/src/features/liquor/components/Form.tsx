/** @jsxImportSource @emotion/react */

import React, { useMemo } from 'react'

import { css } from '@emotion/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Divider, FormControl, FormLabel } from '@mui/joy'
import { flatten } from 'flat'
import { useForm, useWatch } from 'react-hook-form'

import Spacer from '@/components/ui/Spacer'
import BebopRadio from '@/features/liquor/components/BebopRadio'
import BebopSelector from '@/features/liquor/components/BebopSelector'
import BebopTextfield from '@/features/liquor/components/BebopTextField'
import { BebopFormSchema } from '@/features/liquor/domains/BebopForm'

const defaultValues = {
  name: 'フェイバレンタイン',
  meca: 'レッドテイル',
  recommend: 3,
}

const Form = () => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(BebopFormSchema),
    defaultValues,
    mode: 'all',
  })

  // console.log(`errors`, errors)

  const dirtyFormValues: any = useWatch({
    control,
  })

  const isNotChanged = useMemo(() => {
    const flattenedDefaultFormValues: any = flatten(defaultValues)
    const flattenedDirtyFormValues: any = flatten(dirtyFormValues)
    return Object.keys(flattenedDefaultFormValues).reduce((acc, cur) => {
      return (
        acc && flattenedDefaultFormValues[cur] === flattenedDirtyFormValues[cur]
      )
    }, true)
  }, [dirtyFormValues])

  const handleRestoreDefaultValues = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation()
    reset()
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Box
      component={'form'}
      css={css`
        max-width: 100%;
        width: 100%;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        css={css`
          max-width: 100%;
          width: 100%;
          padding: 0 1rem;
        `}
      >
        <FormControl>
          <FormLabel
            css={css`
              font-size: 1.125rem; /* 18px */
              line-height: 1.75rem; /* 28px */
              font-weight: 700;
            `}
          >
            お名前
          </FormLabel>
          <Spacer height='0.5rem' />
          <BebopTextfield control={control} name='name' setValue={setValue} />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel
            css={css`
              font-size: 1.125rem; /* 18px */
              line-height: 1.75rem; /* 28px */
              font-weight: 700;
            `}
          >
            メカニック
          </FormLabel>
          <Spacer height='0.5rem' />
          <BebopSelector control={control} name={'meca'} setValue={setValue} />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel
            css={css`
              font-size: 1.125rem; /* 18px */
              line-height: 1.75rem; /* 28px */
              font-weight: 700;
            `}
          >
            おススメ度
          </FormLabel>
          <Spacer height='0.5rem' />
          <BebopRadio
            control={control}
            name={'recommend'}
            setValue={setValue}
          />
        </FormControl>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        css={css`
          max-width: 100%;
          width: 100%;
          padding: 0 1rem;
        `}
      >
        <Button
          color='primary'
          fullWidth
          type='submit'
          disabled={isNotChanged || !isValid}
        >
          Cowboy Bebop
        </Button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        css={css`
          max-width: 100%;
          width: 100%;
          padding: 0 1rem;
        `}
      >
        <Button
          color='neutral'
          fullWidth
          type='button'
          onClick={handleRestoreDefaultValues}
        >
          Restore Default Values
        </Button>
      </Box>
    </Box>
  )
}

export default Form
