import React from "react";
import Image from 'next/image'

const SkillPage = () => {
    return (
        <div id='skills' className="w-full lg:h-screen p-6">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-2xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <p className="py-4 text-6xl">What I can Do</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/html.png' alt='/' width={64} height={64}></Image>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-4xl">HTML</p>
                            </div>
                        </div>        
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/aws.png' alt='/' width={64} height={64}></Image>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-4xl">AWS</p>
                            </div>
                        </div>        
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/css.png' alt='/' width={64} height={64}></Image>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-4xl">CSS</p>
                            </div>
                        </div>        
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/javascript.png' alt='/' width={64} height={64}></Image>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-4xl">JS</p>
                            </div>
                        </div>        
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/nextjs.png' alt='/' width={64} height={64}></Image>
                            </div>
                            <div className="flex flex-col items-center justify-center m-auto">
                                <p className="text-4xl">NEXT</p>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SkillPage