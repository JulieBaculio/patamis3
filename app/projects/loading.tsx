import { Skeleton } from '@/app/components'
import { Table } from '@radix-ui/themes'
import ProjectActions from './ProjectActions'

const LoadingProjectsPage = () => {

    const projects = [1,2,3,4,5]

  return (
    <div>
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
            <Table.Row key={project}>
              <Table.Cell>
                <Skeleton/>
              <div className='block md:hidden'>
                <Skeleton />
                </div></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      </div>
  )
}

export default LoadingProjectsPage
