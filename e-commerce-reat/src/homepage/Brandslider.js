import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

import '../css/categoryslider.css'
import { Image, Card } from 'react-bootstrap';

function Brandslider() {
    return (
        <div className="category_bg pb-5 mb-5">
            <div className="category_head mb-4">Top Brands</div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    100: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper brands"
            >
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Fpuma.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Funder-armour.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Fzara.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Fadidas.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Fdior.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Fgucci.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Flevis.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='brand-img' variant="top" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fancient%2Fnike.jpg&w=384&q=100" />
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Brandslider