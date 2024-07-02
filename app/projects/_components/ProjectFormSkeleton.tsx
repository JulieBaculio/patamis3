import { Box } from '@radix-ui/themes'
import React from 'react'
import {Skeleton} from '@/app/components'

const ProjectFormSkeleton = () => {
  return (
    <div>
      <Box className='m-w-xl'>
        <Skeleton height="2 rem"/>
        <Skeleton height="20 rem"/>
      </Box>
    </div>
  )
}

export default ProjectFormSkeleton
