import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { } from 'react-icons'
import { } from 'react-icons'
import { } from 'react-icons'
import { } from 'react-icons'
import Suggestion from './Suggestion'



const suggested = [
  { 
    id:1,
    logo:"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e0c547237e6f25084c1fd6e31b0e1218~c5_100x100.jpeg?x-expires=1650196800&x-signature=Ek9gCUXiyc%2B4uyhviTQ85nJSNGU%3D",
    title:"SilentGirloOfficial",
    official:"https://images.pngnice.com/download/2007/TikTok-Verified-Badge-PNG-Photos.png",
    desc:"silent😎❤️"
  },
  { 
    id:2,
    logo:"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e86443ad2852b16cd33c2a4fbb016fee.jpeg?x-expires=1650196800&x-signature=Zuq0Wu0jpgw4CNnrit%2F75j4CmOg%3D",
    title:"Jannatmirza",
    official:"https://images.pngnice.com/download/2007/TikTok-Verified-Badge-PNG-Photos.png",
    desc:"J M 🥀"
  },
  { 
    id:3,
    logo:"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9e2971cf4c6858956afdf899dec0357f~c5_100x100.jpeg?x-expires=1650189600&x-signature=sS8SGwXkLyrArQOnPHtNRKVbwVY%3D",
    title:"Jugijutt.72",
    official:"https://images.pngnice.com/download/2007/TikTok-Verified-Badge-PNG-Photos.png",
    desc:"juggi gutt"
  },
  { 
    id:4,
    logo:"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/31fbd91bd9d6b0318090a220f7c6b20c~c5_100x100.jpeg?x-expires=1650196800&x-signature=nPDZQn2ZHatNNeBtIM%2BrVpNNSxQ%3D",
    title:"Waqa 52",
    official:"https://images.pngnice.com/download/2007/TikTok-Verified-Badge-PNG-Photos.png",
    desc:"waqas bhinder"
  },
  { 
    id:5,
    logo:"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/76440126ea4930f8f2b72087468b8433.jpeg?x-expires=1650196800&x-signature=XWxie5tdNTEi%2BZB2UMv9T4TMrpM%3D",
    title:"Sid mr Rajput2214",
    official:"https://images.pngnice.com/download/2007/TikTok-Verified-Badge-PNG-Photos.png",
    desc:"sid mir rajput"
  },
]
function Sidebar() {
  return (
    <div className='h-screen fixed  ml-28   pb-11'>
        <div className='hover:border-r-4 h-[340px] '>
        <div className='pt-20 items-center border-b pb-2'>
                  <div className='flex items-center space-x-4 h-12  w-72 hover:bg-gray-100 pl-4'>
                      <AiFillHome className='h-6 w-6 text-[#FE2C55]'/>
                     <p className='font-bold text-[#FE2C55] text-[18px] '> For You</p>
                  </div>
                  <div className='flex items-center text-[#161823] space-x-4 h-12 w-72 hover:bg-gray-100 pl-4'>
                      <BsPerson className='h-6 w-6 text-[#161823]'/>
                   <p className='text-[18px] font-bold'>Following</p>   
                  </div>
              </div>
              <div className='pt-1 pl-3'>
                <h1 className='text-[#161823BF] text-[14px] font-medium'>Suggested  accounts</h1>
              </div>
              <div>
                {suggested?.map((item) => (
                    <Suggestion {...item}/>
                ))}
              </div>
        </div>
        <div className='pt-[150px] font-semibold border-b pb-3 text-[13px] text-[#FE2C55] pl-3'>See all</div>

                     <div className='pt-2 space-y-2'>
                       <h1>
                         Following accounts
                       </h1>
                       <div className='flex items-center space-x-3 '>
            <img className='h-9 w-9 rounded-full ' 
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/71a2ca0577d5e6724929c18472db231f~c5_100x100.jpeg?x-expires=1650189600&x-signature=3UNFQEpi3uftlnNHTJC45fjGe7I%3D"
            alt=""
            /><div className='flex flex-col'>
               <div className='flex space-x-2 '>
               <h1 className=' text-[16px]  font-bold 
                 text-[#161823]'>Mr Zain butt123</h1>
               </div>
                <p className='text-[14px]  text-[#141932BF] font-bold'>zainbutt123</p>
            </div>
        </div>
                     </div>
                     <div className='text-[#FE2C55] text-[16px]'>
                       See more
                     </div>
        </div>
  )
}

export default Sidebar