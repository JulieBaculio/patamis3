'use client'
import { EraserIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DeleteProjectButton = ({projectId}: {projectId: number}) => {

    const router = useRouter();
  return (
    <div>

        <AlertDialog.Root>
            <AlertDialog.Trigger>
            <Button color='red'>
            <EraserIcon/>
            Delete Project</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
            <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
            <AlertDialog.Description>
                Are you sure you want to delete this project?
            </AlertDialog.Description>
            <Flex mt="4" gap="3">
                <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                    <Button color="red" onClick={async () => {
                        await axios.delete('/api/projects/'+projectId)
                        router.push('/projects')
                        router.refresh();
                    }}>Delete Project</Button>
                </AlertDialog.Action>
            </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
        
      
    </div>
  )
}

export default DeleteProjectButton
