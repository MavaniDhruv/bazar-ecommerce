import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

import '../css/categoryslider.css'
import { Image, Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap'

import axios from 'axios';

function Blackpart() {
    const [product, setproduct] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/view_product')
            .then(function (res) {
                setproduct(res.data.data)
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
        <>
            <div className="blackpart">
                <Row className="blackpart-bg">
                    <Col sm={5}>
                        <div className="blackpart-head">Buy Designer Dress For Anything</div>
                        <div className="blackpart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam.</div>
                        <div className="blackpart-btn"><button className='collection-btn'>Go to collection</button></div>
                    </Col>
                    <Col sm={7} className='blackpart-card-bg'>
                        <Swiper
                            // slidesPerView={3}
                            spaceBetween={10}
                            navigation={true}
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
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            {
                                product.map((item, ind) => {
                                    return (
                                        <>
                                            {ind < 3 &&
                                                <SwiperSlide className="blackpart-card-bg">
                                                    <Card className='blackpart-card mb-2' style={{ width: '16.8rem', float: 'left' }}>
                                                        <Card.Img className='newarrivals-card-img' variant="top" src={getImage(item.p_img)} />
                                                        <Card.Body className='blackpart-card-text'>
                                                            <Card.Text className='newarrivals-card-cate blackpart-card-text'>{item.p_category.category}</Card.Text>
                                                            <Card.Title className='newarrivals-card-title blackpart-card-text'>{item.p_name}</Card.Title>
                                                            <Card.Text className='newarrivals-card-price blackpart-card-text'>₹{item.p_price}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            }
                                        </>
                                    )
                                })
                            }
                        </Swiper>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Blackpart