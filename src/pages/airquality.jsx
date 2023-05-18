import Image from 'next/image';
import React from 'react';
import airqualityproj from '../../public/airquality.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const temptag = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={airqualityproj} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>  Air Quality Monitoring IOT Solution </h2>
                <h3>IOT /React JS/ Tailwind/ AWS DynamoDB</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    An air quality monitoring IOT application that collects air quality endpoints hosted on AWS.
                </p>
                <a href='https://iot-dashboard-eta.vercel.app' target="_blank" rel="noopener noreferrer">
                <button className='px-8 py-2 mt-4 mr-8'>Live Link</button>
                </a>
                <a href='https://github.com/collinskrotich/iot_dashboard' target="_blank" rel="noopener noreferrer">
                <button className='px-8 py-2 mt-4'>Code</button>
                </a>

            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>IOT</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NodeJS</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>AWS DynamoDB</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>AWS Amplify</p>
            </div>
            </div>
            </div>
            <Link href ='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>


        </div>
    </div>
  )
}

export default temptag