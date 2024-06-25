import { Skeleton } from '@/app/components'
import { Box } from '@radix-ui/themes'

const LoadingNewProjectPage = () => {
  return (
    <div>
      <Box className='m-w-xl'>
        <Skeleton/>
        <Skeleton height="20 rem"/>
      </Box>
    </div>
  )
}

export default LoadingNewProjectPage
