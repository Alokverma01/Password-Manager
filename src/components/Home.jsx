import React from 'react'
import ButtonAnimatedGradient from './Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='mt-6 h-[79vh] flex justify-center '>
      <div className='absolute top-50 md:top-32 lg:top-32'>
        <div className='font-semibold text-white text-3xl text-center mb-4'>
          <span className='text-purple-600'>&lt;</span>

          <span>Pass</span><span className='text-purple-600'>OP/&gt;</span>
        </div>
      <h2 className=" block text-center text-2xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">Store Securely, Access anytime<span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Forget Remembering!</span></h2>
      <h2 className='text-white text-center mt-8 text-xl font-light'>Ready to use—just copy and paste when needed. Your passwords, safely stored for easy access.</h2>
      <div className='flex justify-center items-center mt-12' onClick={()=> navigate("/passwords")}>
      <ButtonAnimatedGradient />
      </div>
      </div>
    </div>
  </>
  )
}

export default Home