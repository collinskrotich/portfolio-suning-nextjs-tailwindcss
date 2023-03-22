import React from 'react'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-blue-500'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
    {/* left */}
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-gray-400 rounded-xl p-4' >
        <div className='lg:p-4 h-full'>
            <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src = '/../professor.webp'></img>
            </div>
            <div>
                <h2 className='py-2'>Collins Rotich</h2>
                <p>Full-Stack Developer</p>
                <p>I am available for freelance or full-time positions. Contact me and let's talk.</p>
            </div>
        </div>
        <div>
            <p className='uppercae pt-8'>Connect With Me</p>
        </div>

    </div>

            </div>

        </div>
    </div>
  )
}

export default Contact