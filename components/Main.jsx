import React from "react";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p 
                    className="uppercase text-sm tracking-widest text-gray-600">CLOUD | SERVERLESS | IOT
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#4682B4]">Collins</span>
                        </h1>
                    <h1 className="py-2 text-gray-700" >
                        A Full-Stack Software Engineer
                        </h1>
                        <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                            I'm a full-stack software engineer specializing in building exceptional digital experiences in the Internet of Things(IoT) space.
                            Currently focused on building responsive IoT applications using serverless technologies on the cloud.
                        </p>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                            <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Main;