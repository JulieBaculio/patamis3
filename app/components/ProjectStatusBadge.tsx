import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record<Status, {label: string, color: 'red' | 'yellow' | 'green'}> = {
    ONGOING: {label: "Ongoing", color: 'yellow'},
    COMPLETED: {label: "Completed", color: 'red'},
    APPROVED: {label: "Approved", color: 'green'},
}

const ProjectStatusBadge = ({status}: {status: Status}) => {
  return (
    <Badge color={statusMap[status].color}>
        {statusMap[status].label}
        </Badge>
  )
}

export default ProjectStatusBadge
