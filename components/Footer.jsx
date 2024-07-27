import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#758694] w-screen h-auto">

      <div id="copyright" className=" flex flex-col sm:gap-y-4 sm:py-10 xs:gap-y-2 xs:py-6 gap-y-1 py-3 items-center">
        <div className="font-lato text-[#fff] flex gap-x-4 regular-14 underline">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="font-opensans regular-18 text-[#fff]">
          <span>© 2024 Harmony Haven. All rights reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer