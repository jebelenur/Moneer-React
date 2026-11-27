import React from 'react'
import errorbg from '../../assets/images/errorbg.png'
import erroroverlay from '../../assets/images/erroroverlay.png'
import Images from '../ui/Images'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center py-11 relative'>
      <Images src={errorbg} className='w-[80%]'/>
      <div className='md:absolute md:left-[49%] md:top-[30%] max-md:hidden'>
        <Images src={erroroverlay} className='max-md:hidden'/>
        <div className='flex flex-col items-center md:absolute md:top-20 md:left-1/2 md:-translate-x-1/2'>
          <span className='font-bold text-[120px] text-[#5F5FFF] font-montserrat block leading-none'>404</span>
          <p className='text-base font-bold text-[#000619] font-montserrat capitalize'>sorry, page not found</p>
          <Link to='/' className='mt-[18px] bg-[#5F5FFF] text-sm text-white font-montserrat font-semibold py-4 px-[30px] capitalize inline-block rounded-[25.5px]' >Back to Home page</Link>
        </div>
      </div>
    </section>
  )
}

export default Error