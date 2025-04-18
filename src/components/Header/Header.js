"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



function Header() {
    const router = useRouter();

    const goToHome = () => {
        router.replace('/')
    }

    return ( 
        <div className='bg-primaryMain py-2 text-left shadow-lg sticky top-0'>
            <div className='w-4/5 md:w-11/12 mx-auto cursor-pointer' onClick={goToHome}>
                <Image
                    src="/dummyImages/app_logo.png"
                    alt='Logo Icon'
                    width={180}
                    height={40}
                />
            </div>
        </div>

    )
}

export default Header