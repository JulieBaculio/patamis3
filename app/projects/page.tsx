import prisma from '@/prisma/client'
import { Table, } from '@radix-ui/themes'
import {ProjectStatusBadge, Link} from '@/app/components'
import ProjectActions from './ProjectActions'


const ProjectsPage = async () => {

  const projects = await prisma.project.findMany();
  
  return (
    <div className='px-5'>
      <ProjectActions/>

      <Table.Root variant='surface'>
        <Table.Header >
          <Table.Row>
            <Table.ColumnHeaderCell>Project</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {projects.map(project => (
            <Table.Row key={project.id}>
              <Table.Cell>
              <Link href={`/projects/${project.id}`}>{project.title}</Link>
              <div className='block md:hidden'>
                <ProjectStatusBadge status={project.status}/>
                </div></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <ProjectStatusBadge status={project.status}/>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{project.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export const revalidate = 0;

export default ProjectsPage
