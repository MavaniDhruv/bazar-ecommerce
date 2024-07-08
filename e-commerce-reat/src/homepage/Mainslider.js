import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/Mainslider.css'

import Image from 'react-bootstrap/Image';


function Mainslider() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay,Pagination]}
                className="mySwiper pt-5"
            >
                <SwiperSlide className='mt-5'><Image src='https://www.snitch.co.in/cdn/shop/files/Summer-2.0_9aeb0439-b14b-405d-a07f-3c1ff651b25a_1400x.jpg?v=1716375459' fluid /></SwiperSlide>
                <SwiperSlide className='mt-5'><Image src='https://www.snitch.co.in/cdn/shop/files/2_b302d2b2-0769-48aa-b710-fa50b43024a3_1400x.jpg?v=1715330420' fluid /></SwiperSlide>
                <SwiperSlide className='mt-5'><Image src='https://www.snitch.co.in/cdn/shop/files/denim-2_4c10c46e-7c37-4cb9-b815-d839357ffdd9_1400x.jpg?v=1716375557' fluid /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Mainslider;