import { lazy, Suspense } from 'react'

import { Box } from '@mui/joy'
import { type NextPage } from 'next'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'

// console.log(
//   data.map((item) => {
//     const todayStamp = dayjs()
//     const pastStamp = todayStamp.subtract(
//       Chance(item.id).hour({ twentyfour: true }),
//       'hours'
//     )
//     return {
//       ...item,
//       start_at: yyyymmddhhmmss(pastStamp),
//       end_at: yyyymmddhhmmss(pastStamp.add(Chance(item.id).d10(), 'hours')),
//       created_at: yyyymmddhhmmss(pastStamp),
//       updated_at: yyyymmddhhmmss(todayStamp),
//     }
//   })
// )

// console.log(
//   data.map((item) => {
//     const todayStamp = dayjs()
//     const pastStamp = todayStamp.subtract(Chance(item.id).d30(), 'days')
//     return {
//       ...item,
//       start_at: yyyymmddhhmmss(pastStamp),
//       end_at: yyyymmddhhmmss(pastStamp.add(Chance(item.id).d10(), 'days')),
//       created_at: yyyymmddhhmmss(pastStamp),
//       updated_at: yyyymmddhhmmss(todayStamp),
//     }
//   })
// )

const Home = lazy(() => import('@/features/home/components/Home'))

const HomePage: NextPage = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Box
            className={
              'mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center justify-center'
            }
          >
            <FallbackLoading />
          </Box>
        }
      >
        <Home />
      </Suspense>
    </ErrorBoundary>
  )
}

export default HomePage
