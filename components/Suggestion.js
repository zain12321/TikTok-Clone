import React from 'react'

function Suggestion(props) {
    const { logo, title, desc, official } = props
  return (
    <div className='h-14 px-2 py-1 w-72 hover:bg-gray-100'>
        <div className='flex items-center space-x-3 '>
            <img className='h-8 w-8 rounded-full ' src={logo}
            alt=""
            /><div className='flex flex-col'>
               <div className='flex space-x-2 '>
               <h1 className=' text-[15px]  font-bold 
                 text-[#161823]'>{title}</h1><img
                className='h-5 w-5 rounded-full '
                 src={official}
                alt=""
                />
               </div>
                <p className='text-[14px]  text-[#141932BF] font-bold'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Suggestion