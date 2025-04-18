"use client"
import { CreateForm1, CreateForm2, CreateForm3, CreateForm4 } from '@/components'
import React, { useState } from 'react'
import susafDimensions from '../susaf.json';
import { useRouter } from 'next/navigation'

function CreateProject() {
    const [formStep, setFormStep] = useState(1)
    const router = useRouter()
    const [effects, setEffects] = useState([])
    const [userStories, setUserStories] = useState([])
    const [backlog, setBacklog] = useState([])

    const nextStep = () => {
        if(formStep < 4) {
            setFormStep(formStep + 1)
        } else {

        }
    }

    const backStep = () => {
        if(formStep > 1) {
            setFormStep(formStep - 1)
        } else {
            
        }
    }

    const goToHome = () => {
        router.push('/')
    }
    return (
        <div className="w-4/5 md:w-11/12 mx-auto text-white">
            <h1 className="text-5xl text-lightGray my-16">Create New <span className="text-primaryMain">Project</span></h1>
            <div>
                {
                    formStep === 1 &&
                    <div>
                        <h2 className='text-xl font-extrabold mb-8'>Step 1 - Add Project Details</h2>
                        <CreateForm1 />
                    </div>
                }
                {
                    formStep === 2 &&
                    <div>
                        <h2 className='text-xl font-extrabold mb-8'>Step 2 - BrainStorm Effects</h2>
                        <CreateForm2 />
                    </div>
                }
                {
                    formStep === 3 &&
                    <div>
                        <h2 className='text-xl font-extrabold mb-8'>Step 3 - Finalize Effects List</h2>
                        <CreateForm3 susafDimensions={susafDimensions} />
                    </div>
                }
                {
                    formStep === 4 &&
                    <div>
                        <h2 className='text-xl font-extrabold mb-8'>Step 4 - Summary of impacts of product</h2>
                        <CreateForm4 />
                    </div>
                }
                
            </div>
            <div className='w-full flex justify-between items-center mt-8'>
                <button className='underline' onClick={backStep}>
                    BACK
                </button>
                <button className='bg-primaryMain py-1 px-4 rounded-lg hover:bg-primaryLight hover:text-black' onClick={formStep === 4 ? goToHome : nextStep}>
                    {formStep === 4 ? 'Finish': 'Next'}
                </button>
            </div>
        </div>
    )
}

export default CreateProject