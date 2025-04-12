import React from 'react'
import ButtonAnimatedGradient from './Button'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className=' mt-5 h-auto flex justify-center items-center flex-col'>
      <div className=' w-[90%] sm:w-[50%] '>
        <h2 className='text-white text-center mt-8 text-xl font-light'>Store Securely, Access Anytime
          Your Trust, Our Commitment!

          At <span className='text-purple-400'>PassOP</span>, we believe security should never be complicated. Our platform ensures your passwords are safely stored and easily accessible whenever you need them. No more forgetting or resetting—just seamless access at your fingertips.

          We prioritize top-notch encryption and user-friendly functionality to give you peace of mind while managing your credentials. Learn more about our commitment to security and how we make password management effortless for you.</h2>
          <div className='flex justify-center items-center mt-12' onClick={() => navigate("/passwords")}>
        <ButtonAnimatedGradient />
      </div>
      </div>
      
    </div>
  </>
  )
}

export default About