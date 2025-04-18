"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function ProjectCard(props) {
    const { title, iconImage, id }  = props
    const router = useRouter()

    const goToProjectPage = (id) => {
        router.push(`/project/${id}`)
    }

    return (
        <div className='w-full bg-black rounded-lg shadow-xl p-3 flex flex-col items-center cursor-pointer' onClick={() => goToProjectPage(id)}>
            <Image
                src={iconImage}
                alt='Project Icon'
                width={120}
                height={120}
            />
            <h3 className='mt-2'>{title}</h3>
        </div>
    )
}

export default ProjectCard