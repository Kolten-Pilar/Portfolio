import React from 'react'
import Title from './Title'

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
        action="https://getform.io/f/fd425f77-b44c-4f07-8788-d4193b81a211"
        method='POST'
        className='flex flex-col w-full md:w-7/12'
        >
          <Title>Contact</Title>
          <input 
          type="text"
          name='name'
          placeholder='Name'
          className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input 
          type="text"
          name='email'
          placeholder='Email'
          className='my-2 p-2 bg-transparent border-2 rounded-md focus:'
          />
          <textarea 
          name="message"
          placeholder='Message'
          rows='10'
          className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <button
          type='submit'
          className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-red-500 drop-shadow-md hover:stroke-white'
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact