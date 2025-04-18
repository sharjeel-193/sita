import { ProjectCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import {MdOutlineAddCircleOutline} from 'react-icons/md'
import 'react-tooltip/dist/react-tooltip.css'
import projects from '../app/projects.json'

export default function Home() {
    // const projects = [
    //     {
    //         title: 'DALL·E',
    //         iconImage: '/dummyImages/dalle.png',
    //         id: '1256'
    //     },
    //     {
    //         title: 'Whisper',
    //         iconImage: '/dummyImages/whisper.png',
    //         id: '1253'
    //     },
    //     {
    //         title: 'Stripe',
    //         iconImage: '/dummyImages/stripes.png',
    //         id: '1236'
    //     },
    //     {
    //         title: 'Buzzfeed',
    //         iconImage: '/dummyImages/buzz.png',
    //         id: '4556'
    //     },
    // ]
    return (
        <main>
            <div className="w-4/5 md:w-11/12 mx-auto text-white">
                <h1 className="text-5xl text-lightGray my-16">Welcome Back, <span className="text-primaryMain">Sharjeel</span></h1>
                <h2 className="font-bold text-3xl mb-5">Your Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        projects.map((project, index) => (
                            <ProjectCard 
                                key={`project-card-${index}`}
                                title={project.product_name}
                                iconImage={project.iconImg}
                                id={project.id}
                            />
                        ))
                    }
                    <Link
                        href={'/create'}
                    >
                        <div 
                            className="w-full bg-primaryLight rounded-lg shadow-xl p-3 flex flex-col items-center justify-center cursor-pointer text-black">
                            <MdOutlineAddCircleOutline size={120} />
                            <h3 className='mt-2'>Add Project</h3>
                        </div>
                    </Link>
                    
                </div>
            </div>
            
        </main>
    );
}
