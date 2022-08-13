import React from 'react'
import {MdDownload} from 'react-icons/md'
function Footer() {
  return (
    <div className='fixed bottom-2 right-5'>
        <div className='h-8 w-24 pl-4 rounded-full bg-[#FFFFFF] border-2 hover:bg-gray-100'>
            <button className=''>
                       Get app
            </button>
            </div>
            <div className='bg-[#FE2C55] ml-14 mt-2  h-8 w-8  rounded-full pt-1 pl-1 hover:bg-[#c51337]'>
              <MdDownload className='rotate-180 h-6 w-6 text-[#FFFFFF]'/>
            </div>
    </div>
  )
}

export default Footer