import Link from 'next/link'

import clsx from 'clsx'

const Home = () => {
  return (
    <section className='mx-auto w-full max-w-2xl'>
      <h1
        className={clsx(
          `text-3xl font-bold underline`,
          `flex items-center justify-center`
        )}
      >
        Hello world!
      </h1>
      <h1
        className={clsx(
          `text-2xl font-bold`,
          `underline`,
          `flex items-center justify-center`
        )}
      >
        Hello world!
      </h1>
      <div className={clsx(`flex items-center justify-center`)}>
        <Link href={'/survey/create'} className={clsx(`underline`)}>
          Survey Create
        </Link>
      </div>
      <div className={clsx(`flex items-center justify-center`)}>
        <Link href={'/basic/create'} className={clsx(`underline`)}>
          Basic Create Some
        </Link>
      </div>
      <div className={clsx(`flex items-center justify-center`)}>
        <Link href={'/basic/edit'} className={clsx(`underline`)}>
          Basic Edit Some
        </Link>
      </div>
      <div className={clsx(`flex items-center justify-center`)}>
        <Link href={'/signin'} className={clsx(`underline`)}>
          SignIn
        </Link>
      </div>
      <div className={clsx(`flex items-center justify-center`)}>
        <Link href={'/sample'} className={clsx(`underline`)}>
          Sample
        </Link>
      </div>
      <div className={clsx(`flex items-center justify-center`)}>
        <Link href={'/story'} className={clsx(`underline`)}>
          Story
        </Link>
      </div>
    </section>
  )
}

export default Home
