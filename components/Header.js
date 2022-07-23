import React from 'react'
import Image from 'next/image'; 
import {useRouter}from 'next/router';
import {getSession, signIn, signOut, useSession} from 'next-auth/react';
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from '@heroicons/react/solid';
export default function Header( ) {
  const router=useRouter(); 
  const {data:session} = useSession(); 
  return (
    <header className=" sticky  top-0 bg-[#040714] h-[70px] z-[1000] flex justify-between items-center  px-7 md:px-12 ">
        <Image onClick={()=>{router.push("/")}} src="/images/images/logo.svg" width={80} height={80} className="cursor-pointer" />

    {session&&(
  
  <div className="hidden  md:flex flex-grow justify-evenly items-center ">
    <a className="header-link group ">
      <HomeIcon className='h-4'/>
      <span className="span group-hover:border-b-2 hover:border-white  ">Home</span>
    </a>
    <a className="header-link group ">
      <SearchIcon className='h-4'/>
      <span className="span group-hover:border-b-2 hover:border-white ">Search</span>
    </a>
    <a className="header-link group ">
      <PlusIcon className='h-4'/>
      <span className="span group-hover:border-b-2 hover:border-white ">Watchlist</span>
    </a>
    <a className="header-link group ">
      <StarIcon className='h-4'/>
      <span className="span group-hover:border-b-2 hover:border-white ">Originals</span>
    </a>
    <a className="header-link group ">
      <img src="/images/images/movie-icon.svg" className="h-5"/>
      <span className="span group-hover:border-b-2 hover:border-white ">Movies</span>
    </a>
    <a className="header-link group ">
      <img src="/images/images/series-icon.svg" className="h-5"/>
      <span className="span group-hover:border-b-2 hover:border-white ">Series</span>
    </a>

  </div>
)}
{session?(
 <img src={session?.user?.image} alt="user image" onClick={signOut} className="rounded-full h-10 cursor-pointer object-cover"/> 
):(
  <button onClick={signIn} className="uppercase tracking-wide  hover:font-bold font-medium border px-2.5 py-1.5 rounded-md hover:bg-gray-200 hover:text-[#040714]  transition duration-500  " >LogIn</button>

)}

    </header>
  )
}
