import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

import '../css/categoryslider.css'
import { Image, Card } from 'react-bootstrap';

import axios from 'axios';

function CategorySlider() {

  const [category, setcategory] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/view_category')
      .then(function (res) {
        setcategory(res.data.data)
        // console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }, [])

  const getImage = (imageName) => {
    return `http://localhost:3001/images/${imageName}`;
  }

  return (
    <div className="category_bg">
      <div className="category_head mb-4">Browse Categories</div>
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper category"
      >
        {
          category.map((item) => {
            return (
              <SwiperSlide>
                <Card style={{ width: '18rem' }}>
                  <div className="category-img-bg"><Card.Img className='category-slider-img' variant="top" src={getImage(item.category_img)} /></div>
                  <Card.Body>
                    <Card.Title className='category_title'>{item.category}</Card.Title>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      {/* <div className="image-container">
        <Image src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F4.jpg&w=384&q=75" alt="Your Image" />
          <div className="icon">
            <i className="fa fa-plus">Hello</i>
          </div>
      </div> */}
    </div>
  )
}

export default CategorySlider