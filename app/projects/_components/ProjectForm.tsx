'use client'
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { projectSchema } from '@/app/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Project } from '@prisma/client';
import { Button, Callout, Heading, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';


type ProjectFormData = z.infer<typeof projectSchema>

const ProjectForm = ({project}: {project?: Project}) => {

    const router = useRouter();
    const {register, control, handleSubmit, formState: { errors }} = useForm<ProjectFormData>({
      resolver: zodResolver(projectSchema)
    })
    const [error, setError] = useState('')
    const [isSubmitting, setSubmitting] = useState(false)
    
    const onSubmit = handleSubmit(async(data) => {
      try{
          setSubmitting(true)

          if (project)
            await axios.patch('/api/projects/'+project.id, data)
          else
          await axios.post('/api/projects', data)

          router.push('/projects')
          router.refresh()

      } catch(error){
          setSubmitting(false)
          setError(`An unexpected error occured.`+` `+error)
      }
      
  })

  return (
    <>
    <div className='pt-1 px-5 text-xl font-bold text-sky-800 '>
        <Heading as="h2">Create a Project</Heading>
    </div>
    
    <div className='max-w-xxl'>
    {error && <Callout.Root color='red'>
        <Callout.Text>{error}</Callout.Text>
    </Callout.Root>}

    <form 
    className='px-5 space-y-3 pt-5' 
    onSubmit={onSubmit}>
      
      <TextField.Root defaultValue={project?.title} placeholder="Project Title" {...register('title')}>
        <TextField.Slot ></TextField.Slot>
      </TextField.Root>
      <ErrorMessage> {errors.title?.message} </ErrorMessage>

      <Controller name="description" control={control} defaultValue={project?.description} render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}/>
      
      <ErrorMessage> {errors.description?.message} </ErrorMessage>

      <label className="block text-sky-800 font-semibold" htmlFor="file_input">Letter of Intent</label>
      <input className="max-w-xl block w-full text-sm text-sky-800 border border-sky-300 rounded-lg cursor-pointer bg-gray-50 dark:text-sky-800 focus:outline-none dark:border-sky-800 dark:placeholder-sky-400" id="loi" type="file" />

      <label className="pt-3 block text-sky-800 font-semibold" htmlFor="file_input">Technology Needs Assessment</label>
      <input className="max-w-xl block w-full text-sm text-sky-800 border border-sky-300 rounded-lg cursor-pointer bg-gray-50 dark:text-sky-800 focus:outline-none dark:border-sky-800 dark:placeholder-sky-400" id="tna" type="file" />

      <label className="pt-3 block text-sky-800 font-semibold" htmlFor="file_input">Financial Report</label>
      <input className="max-w-xl block w-full text-sm text-sky-800 border border-sky-300 rounded-lg cursor-pointer bg-gray-50 dark:text-sky-800 focus:outline-none dark:border-sky-800 dark:placeholder-sky-400" id="fs" type="file" />


      <Button disabled={isSubmitting} className='pt-3'>
      {project ? 'Update Project' : 'Submit New Project'}{' '}  
      {isSubmitting && <Spinner/>}</Button>
    </form>
    </div>

    </>
    
  )
}

export default ProjectForm
