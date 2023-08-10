'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const [topShadow, setTopShadow] = useState(false)

    const handleNav =() => {
        setNav(!nav);
    }

    useEffect(()=>{
        const handleShadow = () =>{
            if(window.scrollY >=90) {
                setTopShadow(true)
            } else{
                setTopShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[]);
    return (
        <div className={topShadow? 'fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>

            <Image className= 'px-4' src= "/logo.png" width={125} height={50} alt="/" /> 

            <div>
                <ul className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href="/#project">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
            </div>

            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
            </div>

            <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
                <div className={nav
                ?'fixed left-0 top-0 w-[75%] sm:w-[40%] h-screen bg-white p-10 ease-in duration-500':
                 'fixed left-[-100%] top-0 w-[75%] sm:w-[40%] h-screen bg-white p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                    <Image src= "/logo.png" width={125} height={50} alt="/" /> 
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets build something together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='text-sm py-4'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm py-4'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm py-4'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm py-4'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm py-4'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-blue-400'>Lets Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>

        </div>
    )
}

export default NavBar