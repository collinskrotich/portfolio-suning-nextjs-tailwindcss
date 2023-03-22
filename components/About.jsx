import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-blue-500'>About</p>
                <h2 className='py-4'>Who I am</h2>

                <p>
                    After pursuing a degree in Electrical & Electronic Engineering and having spent 3 years in the telecom industry working for network operators and vendors,
                    I always had a knack for technology and computers.
                    Industry shifts has seen the technology world become more software defined and required subsequent re-aligning. 
                    </p>
                    <p className='py-2'>
                    In 2022, I enrolled for a software engineering bootcamp learning HTML, CSS, Javascript & React where I started building fun projects on the side.
                </p>

                <p className='py-2'>
                    I quickly developed a passion for programming and yearned to learn more. 
                    I continued building projects consistently and improving the earlier projects I had built. 
                    At my company I transitioned from being a support IoT engineer to a software engineer focussing on building scalable IoT web applications.
                </p>

                <p className='py-2'>
                    I am now spending my time learning serverless and building event-driven software applications on cloud(AWS, GCP, Azure).
                </p>

                <p className='py-2 underline cursor-pointer'>
                    Check out some of my latest projects.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl'
                src="/officesetup.jpg" alt="/" width = '500' height='200' />
            </div>

        </div>
    </div>
  )
}

export default About