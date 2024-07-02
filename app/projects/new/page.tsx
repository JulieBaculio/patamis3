
import dynamic from 'next/dynamic'
import ProjectFormSkeleton from './loading'

const ProjectForm = dynamic(
  () => import('@/app/projects/_components/ProjectForm'),
  {
    ssr: false,
    loading: () => <ProjectFormSkeleton/>
  }
)

const NewProjectPage = () => {
  return (
    <div>
      <ProjectForm/>
    </div>
  )
}

export default NewProjectPage
