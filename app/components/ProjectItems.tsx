import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = (props:any) => {
    return(
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10' src='/property.jpg' alt='/' width={800} height={800}></Image>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <p className='text-2xl text-white tracking-wider text-center'>{props.titleName}</p>
            <p className='pb-4 pt-2 text-white text-center'>NextJS</p>
            <Link href={props.projectURL}>
                <p className='text-center py-3 rouded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
    )
}

export default ProjectItem