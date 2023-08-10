import React from 'react'
import ProjectItem from './ProjectItems'


const Projectpage = () => {
    return (
        <div id='projects' className='w-full h-auto'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <p className='text-6xl py-4'>What I've Built</p>
            
                <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem titleName='Property Finder' backgroundImg={""} projectURL='https://github.com/shubham95'/>
                <ProjectItem titleName='Property Finder' backgroundImg={""} projectURL='https://github.com/shubham95'/>
                <ProjectItem titleName='Property Finder' backgroundImg={""} projectURL='https://github.com/shubham95'/>
                <ProjectItem titleName='Property Finder' backgroundImg={""} projectURL='https://github.com/shubham95'/>

                </div>
            </div>

        </div>
    )
}

export default Projectpage