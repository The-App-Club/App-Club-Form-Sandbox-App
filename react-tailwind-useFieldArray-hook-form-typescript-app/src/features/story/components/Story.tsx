import clsx from 'clsx'

import Form from '@/features/story/components/Form'

const Story = () => {
  return (
    <section className='mx-auto w-full max-w-2xl px-2'>
      <div className={clsx(`sticky top-0 z-10 bg-white`)}>
        <h1
          className={clsx(
            `sticky top-0 z-10 bg-white`,
            `text-3xl font-bold`,
            `flex items-center justify-center`
          )}
        >
          Story
        </h1>
      </div>
      <Form />
    </section>
  )
}

export default Story
