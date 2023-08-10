import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div id='about' className='w-full md:h-screen p-4 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
                <div className='col-span-2'>
                    <p className='py-4 uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                    <p className='text-4xl'>Who I AM</p>
                    <p className='text-gray-600'>I am into computer science field more than a decade. I worked as software developer in couple of organization 
                        and also completed my masters in between. Currently i am starting my frontend journey from scratch by understanding 
                        some new library and frameworks so that i could contribute to open source projects. Currently i am onboarding to TailwindCSS
                        NextJS and webPack and also getting hands on some cool tools</p>
                    <p>Check out My Projects</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105
                ease-in duration-300'>
                    <Image className='rounded-xl' src="/about.jpg" alt="about image" width={400} height={600}/>
                </div>
            </div>
        </div>
    )
}

export default AboutPage