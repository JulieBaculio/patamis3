import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const ProjectActions = () => {
  return (
    <div>
       <div className='mb-5'>
      <Button><Link href="/projects/new">New Project</Link></Button>
      </div>
    </div>
  )
}

export default ProjectActions
