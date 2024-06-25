import { ProjectStatusBadge } from '@/app/components'
import { Project } from '@prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'

const ProjectDetails = ({project}: {project: Project}) => {
  return (
    <>
    <Heading>{project.title}</Heading>
      <Flex className="space-x-3" my="2">
        <ProjectStatusBadge status={project.status}/>
        <Text>{project.createdAt.toDateString()}</Text>
      </Flex>
      
      <Card className='prose' mt='4'>
      <ReactMarkdown>{project.description}</ReactMarkdown>
      </Card>
    </>
  )
}

export default ProjectDetails
