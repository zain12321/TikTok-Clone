import React from 'react'
import { FiSearch }  from 'react-icons/fi'
import { RiDownloadCloudLine } from 'react-icons/ri'
import {  MdOutlineInbox } from 'react-icons/md'
import { MdPersonOutline } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaRegKeyboard } from 'react-icons/fa'
import {   RiEnglishInput } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'

function Header() {
  return (
    <div className='fixed z-20 flex bg-[#FFFFFF] items-center space-x-56 h-14 px-28  pt-3 pb-2 border-b-2 w-screen'>
       <div className=''>
        <img className='h-11 w-36
        ' src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Logo.wine.svg"
        alt=""
        />
       </div>
       <div className='flex  w-[350px] px-4 h-11 rounded-full bg-gray-100 justify-between items-center'>
        <input name='search'
        placeholder='Search accounts and videos'
        className='w-52 bg-gray-100 outline-none'
        required
        />
        <div className=' border-l border-gray-300  pl-3'>
              <FiSearch className='h-5 w-5 text-gray-500'/>
        </div>
       </div>
       <div className='flex space-x-6 items-center' >
           <div>
        <RiDownloadCloudLine className='h-7 w-7'/></div>
        <div>
            <img className='h-7 w-7' 
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbgE-tsFcRyLE-cHHfzus0lLA49Mb3EEgw4xUKXykHeS8KK0pX"
            alt=""
            />
        </div>
        <div className='flex static items-center '>
            <MdOutlineInbox className=' h-7 w-7'/>
           <div className=' pl-3  absolute  top-2  ml-1 '>
              <p className='bg-[#FE2C55]  text-center   text-white h-6 w-6 rounded-full 
             '><span className=''>3</span></p></div>

        </div>
      <div className='dropdowns'>
      <div className='dropout'>
            <img  className='h-9  w-9 rounded-full
            ' src="https://pbs.twimg.com/profile_images/1510876499884314627/fGkzkHNn_400x400.png"
            alt=""
            />
        </div>

        <div className='dropdown-contents flex px-4 py-4 flex-col  shadow-xl'>
       <div className='flex flex-col  py-4 space-y-4 border-b-2 '>
       <a href="#" className='flex space-x-6  items-center'><MdPersonOutline className='h-6 w-6'/>
       <p className='text-[16px] text-[#050505] font-semibold'> View Profile</p></a>
       <a href="#" className='flex space-x-7  items-center'><FiSettings className='h-5 w-5'/>
       <p className='text-[16px] text-[#050505] font-semibold'> Settings</p></a>
       <a href="#" className='flex space-x-6  items-center'><AiOutlineQuestionCircle className='h-5 w-5'/>
       <p className='text-[16px] text-[#050505] font-semibold'> Feedback and Help</p></a>
       <a href="#" className='flex space-x-6  items-center'><FaRegKeyboard className='h-5 w-5'/>
       <p className='text-[16px] text-[#050505] font-semibold'> Keyboard</p></a>
       <a href="#" className='flex space-x-6  items-center'><RiEnglishInput className='h-5 w-5'/>
       <p className='text-[16px] text-[#050505] font-semibold'> English</p></a>
       </div>
       <div className='pt-3'>
       <a href="#" className='flex space-x-6  items-center'><FiLogOut className='h-5 w-5'/>
       <p className='text-[16px] text-[#050505] font-semibold'> Log out</p></a>
       
       </div>
        </div>
      </div>
       </div>

    </div>
  )
}

export default Header