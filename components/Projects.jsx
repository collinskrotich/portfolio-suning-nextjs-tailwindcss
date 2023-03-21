import React from 'react'
import ProjectItems from './ProjectItems'
import todolistproj from '../public/to-do-list.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-blue-500'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItems 
                  title="Serverless To Do App"
                  backgroundImg={todolistproj}
                  projectUrl='/property'               
                />
                <ProjectItems 
                  title="Serverless To Do App"
                  backgroundImg={todolistproj}
                  projectUrl='/property'               
                />
                <ProjectItems 
                  title="Serverless To Do App"
                  backgroundImg={todolistproj}
                  projectUrl='/property'               
                />
                <ProjectItems 
                  title="Serverless To Do App"
                  backgroundImg={todolistproj}
                  projectUrl='/property'               
                />

            </div>
        </div>
    </div>
  )
}

export default Projects