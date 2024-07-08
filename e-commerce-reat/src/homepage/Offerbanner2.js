import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

import { Image, Card, Row, Col } from 'react-bootstrap';

function Offerbanner2() {
    return (
        <>
            <div className="offerbanner-bg mb-5 pb-5">
                <Row>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            }
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <Col sm={8}>
                            <SwiperSlide className='offerbanner'>
                                <div className='shadow'></div>
                                <Image className="animated-image" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fancient%2Fbanner-3.png&w=1200&q=100" />
                            </SwiperSlide>
                        </Col>
                        <Col sm={4}>
                            <SwiperSlide className='offerbanner'>
                                <div className='shadow'></div>
                                <Image className="animated-image" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fancient%2Fbanner-4.png&w=750&q=100" />
                            </SwiperSlide>
                        </Col>
                    </Swiper>
                </Row>
            </div>
        </>
    )
}

export default Offerbanner2