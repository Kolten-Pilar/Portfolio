import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Kolten Pilar</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Full Stack Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>Welcome to my portfolio page! I am both a self-taught programmer and a graduate of Per Scholas' Software Engineering Bootcamp. I am a technology enthusiast in all facets and dedicated to keeping up with modern trends pertaining to the tech world. <br />
      <br />
      I am a problem solver and a collaborator. 
      <br />
      <br />
      Please feel free to contact me on{' '}
      <a href='https://www.linkedin.com/in/kolten-pilar/' target='_blank' rel='noreferrer noopener' className='text-blue-500 hover:underline underline-offset-2 text-blue-700 decoration-3 decoration-blue-800 '>LinkedIn </a>
       with any questions or opportunities.
      </p>
    </div>
  )
}

export default Intro