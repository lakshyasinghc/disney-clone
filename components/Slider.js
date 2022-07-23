import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function Slider() {
  return (
    <section className="relative shadow-2xl mt-7 max-w-screen-2xl mx-auto" >
           <Carousel autoPlay infiniteLoop  showStatus={false} dynamicHeight={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={100}  interval={1000}>
                <div>
                    <img loading="lazy" src="/images/images/slider-1.jpg" />
   
                </div>
                <div>
                    <img loading="lazy"src="/images/images/slider-2.jpg"  />

                </div>
                <div>
                    <img loading="lazy"src="/images/images/slider-3.jpg" />
                </div>
                <div>
                    <img loading="lazy"src="/images/images/slider-4.jpeg" />
                </div>
            </Carousel>
    </section>
  )
}
