import Head from 'next/head'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Navbar from '../components/Navbar'

import SectionItems from '../components/SectionItems'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tik-Tok-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Header/>

      <div className='flex'>
      <Sidebar />
      <div className='ml-[540px] mt-11'>
      <SectionItems/>
      <Footer/>
      </div>
      </div> 
      {/* <Map/> */}

    </div>
  )
}