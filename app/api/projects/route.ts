import {NextRequest, NextResponse} from "next/server"
import {z} from 'zod'
import prisma from "@/prisma/client"
import { projectSchema } from "@/app/validationSchemas"

export async function POST(request: NextRequest){
    const body = await request.json()
    const validation = projectSchema.safeParse(body);
    

    if (!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400})

    const newProject = await prisma.project.create({
        data: {title: body.title, description: body.description}
    })

    return NextResponse.json(newProject, {status: 201})
}