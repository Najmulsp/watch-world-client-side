import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import banner1 from "../../public/banner/banner watch.png";
import banner2 from "../../public/banner/watches banner2.jpg";
import banner3 from "../../public/banner/watches banner3.webp";
import banner4 from "../../public/banner/watches banner4.jpg";

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='container mx-auto '>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper h-[400px]  lg:h-[500px]"
      >
        <SwiperSlide >
            <div className='object-cover border-2 min-h-[500px] w-full'>
                <img  src={banner1} className='relative h-full object-fill'/>
                <div className="absolute inset-0 bg-gray-950 opacity-70">
                </div>
                <h1 className='absolute top-8 lg:top-20 left-20 text-2xl  lg:text-5xl font-bold text-white'>The Watch Everyone Desires!</h1>
                <p className='absolute w-3/5 top-16 lg:top-36 left-20 lg:text-2xl font-semibold text-white'>The best in class elegant watches from luxury brand watch world high quality watches into which a lot of care has gone in </p>
                <button className='btn rounded-none  bg-[#DAA82E] text-white hover:bg-blue-950 absolute  top-44 lg:top-56 left-20'>Buy Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className=''>
                <img  src={banner2} className='relative object-cover w-full'/>
                <div className="absolute inset-0 bg-gray-950 opacity-20">
                </div>
                <h1 className='absolute top-8 lg:top-20 left-20 text-2xl  lg:text-5xl font-bold text-white'>The Watch Everyone Desires!</h1>
                <p className='absolute w-3/5 top-16 lg:top-36 left-20 lg:text-2xl font-semibold text-white'>The best in class elegant watches from luxury brand watch world high quality watches into which a lot of care has gone in </p>
                <button className='btn rounded-none  bg-[#DAA82E] text-white hover:bg-blue-950 absolute  top-44 lg:top-56 left-20'>Buy Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className='object-cover w-full'>
                <img  src={banner3} className='relative'/>
                <div className="absolute inset-0 bg-gray-950 opacity-20">
                </div>
                <h1 className='absolute top-8 lg:top-20 left-20 text-2xl  lg:text-5xl font-bold text-white'>The Watch Everyone Desires!</h1>
                <p className='absolute w-3/5 top-16 lg:top-36 left-20 lg:text-2xl font-semibold text-white'>The best in class elegant watches from luxury brand watch world high quality watches into which a lot of care has gone in </p>
                <button className='btn rounded-none  bg-[#DAA82E] text-white hover:bg-blue-950 absolute  top-44 lg:top-56 left-20'>Buy Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className='h-[500px]'>
                <img  src={banner4} className='relative object-cover min-h-[500px] w-full'/>
                <div className="absolute inset-0 bg-gray-950 opacity-10">
                </div>
                <h1 className='absolute top-8 lg:top-20 left-20 text-2xl  lg:text-5xl font-bold text-white'>The Watch Everyone Desires!</h1>
                <p className='absolute w-3/5 top-16 lg:top-36 left-20 lg:text-2xl font-semibold text-white'>The best in class elegant watches from luxury brand watch world high quality watches into which a lot of care has gone in </p>
                <button className='btn rounded-none  bg-[#DAA82E] text-white hover:bg-blue-950 absolute  top-44 lg:top-56 left-20'>Buy Now</button>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    );
};

export default Banner;