import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItems = ({title, backgroundImg, projectUrl}) => {
  return (
    <div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4
                group hover:bg-gradient-to-r from-gray-800 to-gray-100'>
                    <Image className='rounded-xl group-hover:opacity-100' src={backgroundImg} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-gray-700 tracking-wider text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-gray-700 text-center'>React</p>
                        <Link href={projectUrl}>
                            <p className='text-center py-3 rounded-lg bg-blue-100 text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
    </div>
  )
}

export default ProjectItems