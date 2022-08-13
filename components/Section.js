import React, { useRef, useState } from 'react'
import {IoMusicalNotes} from 'react-icons/io5'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaCommentDots  } from 'react-icons/fa'
import { IoIosShareAlt } from 'react-icons/io'
function Section(props) {
         const { logo, name, small, title, des1, desc2, desc3, music, image} = props
     
  //   const [ playing, setPlaying ] = useState(false)
  // const videoRef = useRef(null);
  
  // const onVideoPress = () => {
  //     if (playing) {
  //       videoRef.current.pause();
  //       setPlaying(false);
  //     }
  //     else {
  //       videoRef.current.play();
  //       setPlaying(true);

  //     }
    
  // }
  return (
  <div className='border-b pb-1 w-[740px]'>
         <div className='flex   items-center  justify-between  space-x-2' >
             <div className='flex items-center space-x-3'> 
                <img className='h-14 w-14 rounded-full'
           src={logo}
                alt=""
                />
                <div className='mt-[60px]'>
                    <h1 className='flex '><span className='hover:underline text-[#161823] font-bold'>{name}</span>
                    <span className='pl-1'>{small}</span></h1>
                    <p className='text-[#161823] font-semibold'>{title}
                    <span className='text-[#161823] font-semibold'>{des1}</span></p>
                    <p className='text-[#161823] font-bold'>{desc2}</p>
                    <p className='text-[#161823] font-bold'>{desc3}</p>
                    <p className='flex space-x-3 items-center '> <IoMusicalNotes/>
                    <p className='text-[#161823] font-bold
                    '>{music}</p></p>
                    </div> 
             </div>
             <div className='h-7 rounded-md pl-6  w-24 border border-[#FE2C55]'>
                    <button className='font-semibold text-[#FE2C55]'>Follow </button>
             </div>
         </div>


      <div className='flex  space-x-4'>
      <div className="ml-16 mt-4 mb-4">
        <img className='h-[480px] rounded-xl w-[290px]' 
        src={image}
        alt=""
        />
    {/* <video 
      height={300}
      width={290} 
      
      className="rounded-3xl absolute"
      loop
      onClick={onVideoPress}
      ref={videoRef}
      src={video} >
      </video>
      */}
    </div> 
    <div className='pr-80 pt-[120px] bottom-0 mt-9 space-y-2 '>
    <div   className=''>
    <div className='pt-32'>
        <p className='bg-gray-200 h-11 w-11 rounded-full hover:bg-gray-300 pl-3 pt-3'><BsFillHeartFill
         className='h-5 w-5'/></p>
        <p className='text-[#050505] font-medium pl-[10px]'>1.2k</p>
      </div>
      <div>
        <p className='bg-gray-200 h-11 w-11 rounded-full hover:bg-gray-300 pl-3 pt-3'><FaCommentDots 
           className='h-5 w-5'/></p>
        <p className='text-[#050505] font-medium pl-[10px]'>245</p>
      </div>
      <div>
        <p className='bg-gray-200 h-11 w-11 rounded-full hover:bg-gray-300 pl-3 pt-3'><IoIosShareAlt
           className='h-6 w-6'/></p>
        <p className='text-[#050505] font-medium pl-[10px]'>7.2k</p>
      </div>
    </div>
    </div>
      </div>


    </div>
  )
}

export default Section