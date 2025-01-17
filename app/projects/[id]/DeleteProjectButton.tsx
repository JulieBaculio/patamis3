'use client'
import { EraserIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button, Flex, Spinner } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const DeleteProjectButton = ({projectId}: {projectId: number}) => {

    const router = useRouter();
    const[error, setError] = useState(false);
    const[isDeleting, setDeleting] = useState(false);

    const deleteProject = async () => {
        try {
            setDeleting(true)
            await axios.delete('/api/projects/'+projectId)
            router.push('/projects')
            router.refresh()
        } catch (error) {
            setDeleting(false)
            setError(true)
        }
        
    }
  return (
    <>

        <AlertDialog.Root>
            <AlertDialog.Trigger>
            
            <Button color='red'>
            <EraserIcon/>
            Delete Project
            </Button>

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
                    <Button color="red" onClick={deleteProject} disabled={isDeleting}>Delete Project {isDeleting && <Spinner/>}</Button>    
                </AlertDialog.Action>
            </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
         
        <AlertDialog.Root open={error}>
            <AlertDialog.Content>
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description>Cannot delete this project.</AlertDialog.Description>
            <Button color="gray" variant="soft" mt="2" onClick={() => setError(false)}>OK</Button>
            </AlertDialog.Content>
        </AlertDialog.Root>
      
    </>
  )
}

export default DeleteProjectButton
