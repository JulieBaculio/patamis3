import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import ProjectFormSkeleton from './loading'

const ProjectForm = dynamic(
  () => import('@/app/projects/_components/ProjectForm'),
  {
    ssr: false,
    loading: () => <ProjectFormSkeleton/>
  }
)

interface Props {
  params: {id: string}
}
const EditProjectPage = async ({params}: Props) => {
  const project = await prisma.project.findUnique({
    where: {id: parseInt(params.id)}
  })

  if (!project) notFound()

  return (
    <div>
      <ProjectForm project={project}/>
    </div>
  )
}

export default EditProjectPage
