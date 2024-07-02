import { projectSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export async function PATCH(request: NextRequest, {params}: {params: {id: string}}){
    const body = await request.json();
    const validation = projectSchema.safeParse(body)

    if (!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400})

    const project = prisma.project.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!project)
        return NextResponse.json({error: 'Invalid issue'}, {status: 404})
    const updatedProject = await prisma.project.update({
        where: {id: parseInt(params.id)},
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(updatedProject)
}