import React from "react"
import Image from "next/image"
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from "next/link"

const Contact = () =>{
    return (
        <div id='contact' className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <p className="text-4xl py-4"> Get In touch </p>
                
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full rounded-xl">
                            <div>
                                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src='/property.jpg' alt='' height={400} width={400}></Image>
                            </div>
                            <div className="">
                                <p className="text-4xl">
                                    Shubham95
                                </p>
                                <p>Engineer</p>
                                <p>
                                    Available for freelancing work, Lets talk about it
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">Connect with ME</p>
                                <div className="w-full flex items-center justify-between py-4">
                                    <div className='flex items-center justify-between my-4 w-full mx-2'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                        </div>
                        </div>
                        </div>

                    </div>
                    {/* right */}
                    
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form action="">
                                <div className="grid md:grid-cols-2 gap-5 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2" htmlFor=""> Name </label>
                                        <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2" htmlFor="">Phone Number </label>
                                        <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2" htmlFor=""> Email </label>
                                    <input type="email" className="border-2 rounded-lg p-3 flex border-gray-300" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2" htmlFor=""> Subject </label>
                                    <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2" htmlFor=""> Message </label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10'></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4 bg-cyan-700 ">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center py-12">
                <Link href="/">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Contact