import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

import '../css/Review.css'
import { Image, Card, Row, Col } from 'react-bootstrap';

import { BiSolidQuoteLeft } from "react-icons/bi";

import axios from 'axios';

function CategorySlider() {
  return (
    <div className="review-slide-bg">
      <div className="review-head mb-2">Testimonial</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={false}
        navigation={true}
        scrollbar={{}}
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
          }
        }}
        modules={[Autoplay, Navigation, Scrollbar]}
        className="mySwiper"
      >
                <SwiperSlide className='Review-slide'>
                  <Row>
                    <Col sm={3}><div className="user-img-bg"><Image className='user-img' src='https://chawkbazar.vercel.app/assets/images/testimonials/6.png' /></div></Col>
                    <Col sm={9} className='user-name'><name>Perry White</name><br /><from>from Duisbarg</from></Col>
                    <Col sm={12} className='review-text'>OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.</Col>
                    <Col sm={12} className='quote-icon'><BiSolidQuoteLeft /></Col>
                  </Row>
                </SwiperSlide>
                <SwiperSlide className='Review-slide'>
                <Row>
                  <Col sm={3}><div className="user-img-bg"><Image className='user-img' src='https://chawkbazar.vercel.app/assets/images/testimonials/8.png' /></div></Col>
                  <Col sm={9} className='user-name'><name>Ketty Rawn</name><br /><from>from Duisbarg</from></Col>
                  <Col sm={12} className='review-text'>OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.</Col>
                  <Col sm={12} className='quote-icon'><BiSolidQuoteLeft /></Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide className='Review-slide'>
              <Row>
                <Col sm={3}><div className="user-img-bg"><Image className='user-img' src='https://chawkbazar.vercel.app/assets/images/testimonials/7.png' /></div></Col>
                <Col sm={9} className='user-name'><name>Jiniya Snow</name><br /><from>from Duisbarg</from></Col>
                <Col sm={12} className='review-text'>OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.</Col>
                <Col sm={12} className='quote-icon'><BiSolidQuoteLeft /></Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide className='Review-slide'>
              <Row>
                <Col sm={3}><div className="user-img-bg"><Image className='user-img' src='https://chawkbazar.vercel.app/assets/images/testimonials/9.png' /></div></Col>
                <Col sm={9} className='user-name'><name>Amanda Johnson</name><br /><from>from Duisbarg</from></Col>
                <Col sm={12} className='review-text'>OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.</Col>
                <Col sm={12} className='quote-icon'><BiSolidQuoteLeft /></Col>
              </Row>
            </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CategorySlider