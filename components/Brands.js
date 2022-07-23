import Image from 'next/image'
import React from 'react'

export default function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10  gap-6 px-8 max-w-[1400px] mx-auto">
        <div className='brand group border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:scale-105 transition duration-500 '>
            <Image src="/images/images/disnep.png" layout="fill" objectFit="cover"  />
            <video autoPlay loop playsInline className='hidden group-hover:inline rounded-lg object-cover' >
                <source src="/videos/videos/disney.mp4" type="video/mp4"/>
            </video>
        </div>


        <div className='brand group border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:scale-105 transition duration-500 '>
            <Image src="/images/images/marvel.png" layout="fill" objectFit="cover"  />
            <video autoPlay loop playsInline className='hidden group-hover:inline rounded-lg object-cover' >
                <source src="/videos/videos/marvel.mp4" type="video/mp4"/>
            </video>
        </div>


        <div className='brand group border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:scale-105 transition duration-500 '>
            <Image src="/images/images/national-geographic.png" layout="fill" objectFit="cover"  />
            <video autoPlay loop playsInline className='hidden group-hover:inline rounded-lg object-cover' >
                <source src="/videos/videos/national-geographic.mp4" type="video/mp4"/>
            </video>
        </div>


        <div className='brand group border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:scale-105 transition duration-500 '>
            <Image src="/images/images/pixar.png" layout="fill" objectFit="cover"  />
            <video autoPlay loop playsInline className='hidden group-hover:inline rounded-lg object-cover' >
                <source src="/videos/videos/pixar.mp4" type="video/mp4"/>
            </video>
        </div>


        <div className='brand group border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:scale-105 transition duration-500 '>
            <Image src="/images/images/starwars.png" layout="fill" objectFit="cover"  />
            <video autoPlay loop playsInline className='hidden group-hover:inline rounded-lg object-cover' >
                <source src="/videos/videos/star-wars.mp4" type="video/mp4"/>
            </video>
        </div>
 

 
    </section>
  )
}
