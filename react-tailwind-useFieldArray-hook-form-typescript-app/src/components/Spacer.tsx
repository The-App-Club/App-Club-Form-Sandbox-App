import clsx, { ClassValue } from 'clsx'

const Spacer = ({ classValue = `h-1` }: { classValue?: ClassValue }) => {
  // eslint-disable-next-line tailwindcss/no-custom-classname
  return <div className={clsx(`w-full`, classValue)} />
}

export default Spacer
