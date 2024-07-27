import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' bg-[#405D72] w-screen h-auto flex justify-center items-center'>

    
            <div id="home" className=" border-8 border-[#F7E7DC] border-b-0 rounded-b-none rounded-md bg-[url('/bg1.png')] bg-left-bottom w-11/12 h-5/6 bg-no-repeat bg-cover  flex flex-col justify-center items-center " >
            
                    <div className='flex md:flex-row flex-col items-center justify-center  gap-2 xs:gap-1 box-border'>
                        <Image className='p-10' src="/logo.png" alt="logo" width={250} height={250}/>
                        <div className='w-auto h-auto  backdrop-blur-[14px] md:border-l-2  border-white ml-4 mr-4 mt-4 mb-4'>
                            <div id='heading-box' className='md:pl-[20px] md:pt-[40px] md:mb-[24px] md:pr-[20px] xxs:pl-[4px] xxs:pt-[4px] xxs:pr-[4px]'>
                                <text className='font-playfair xl:bold-64 lg:bold-52 md:bold-40 sm:bold-35 xs:bold-28 bold-20 text-[#FFF]'>Harmony Haven: The Wellness Retreat Platform !</text>
                            </div>
                            <div id='text-box' className='md:pl-[20px] md:pr-[10px] xxs:pl-[4px]  xxs:pr-[4px] '>
                                <text id='details' className='font-playfair xl:regular-20 lg:regular-18 md:regular-16 sm:regular-14 xs:regular-12 regular-09   text-[#F2F2F2]'> Welcome to our Wellness Retreat Platform, where<i> tranquility meets rejuvenation.</i></text>
                            </div>
                            <div id='text-box' className='md:pl-[20px] md:pb-[40px] md:pr-[10px] xxs:pl-[4px]  xxs:pr-[4px]'>
                                <text id='details' className=' font-playfair xl:regular-20 lg:regular-18 md:regular-16 sm:regular-14 xs:regular-12 regular-09 text-[#F2F2F2]'> Explore a curated selection of retreats designed to restore balance, inspire mindfulness, and revitalize your spirit.</text>
                            </div>
                        </div>
                    </div>
          
            </div>
    </div>
  )
}

export default Hero
