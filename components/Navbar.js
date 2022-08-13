// import React, { useEffect, useState } from 'react'

// function Navbar() {
//     const [show, setShow] = useState(null)
//     const controlNavbar = () => {
//         if (window.scrollY > 250 ) {
//             setShow(false)
//         }else{
//           setShow(false)
//         }
//     }
  
//     useEffect(() => {
//         window.addEventListener('scroll', controlNavbar)
//         return () => {
//             window.removeEventListener('scroll', controlNavbar)
//         }
//     }, [])

//   return (
//     <header   className={`active ${show && 'hidden'}`}>
//         <div className='pt-16'>
//             ssssssssssss
//         </div>
//     </header>
//   )
// }

// export default Navbar