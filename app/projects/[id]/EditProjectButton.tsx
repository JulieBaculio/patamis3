import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const EditProjectButton = ({projectId}: {projectId: number}) => {
  return (
    <div>
      <Button>
      <Pencil2Icon/>
        <Link href={`/projects/${projectId}/edit`}>Edit Project</Link>
    </Button>
    </div>
  )
}

export default EditProjectButton