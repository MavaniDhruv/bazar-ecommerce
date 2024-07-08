import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Image, Row, Card } from 'react-bootstrap'
import { FaRegHeart } from "react-icons/fa6";

import '../css/product-detail.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../slice/counterSlice';

function Productdetail() {

  // const dispatch=useDispatch();

  // const cart_data = useSelector((state) => state.cart_data.cart_data)
  // console.log(cart_data)

  const { id } = useParams();

  const [product, setproduct] = useState([])

  const [allproduct, setallproduct] = useState([])

  const [cartproduct,setcartproduct] = useState([])

  const [cartid,setcartid] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:3001/user/view_product/${id}`)
      .then(function (res) {
        setproduct(res.data.data);
        // console.log(res.data.data);
        // console.log(res.data.data.p_name)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [id])

  const getImage = (imageName) => {
    return `http://localhost:3001/images/${imageName}`;
  }

  useEffect(() => {

    axios.get(`http://localhost:3001/user/view_product`)
      .then(function (res) {
        setallproduct(res.data.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  const getImage1 = (imageName) => {
    return `http://localhost:3001/images/${imageName}`;
  }
  
  const Cart_click = (id) =>{

    axios.post(`http://localhost:3001/user/add_cart/${id}`)
    .then(function (res) {
        setcartproduct(res.data.data);
        // console.log(res.data.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
  }

  return (
    <>
      <div className="product-detail-container">
        <Row>
          <Col sm={1}>
            <Row>
              <Col xs={12}><Image className='multiple-img' src='https://www.snitch.co.in/cdn/shop/files/4MSS2901-02-M27.jpg?v=1714559228&width=120' /></Col>
              <Col xs={12}><Image className='multiple-img' src='https://www.snitch.co.in/cdn/shop/files/4MSS2901-02-M11.jpg?v=1714559228&width=120' /></Col>
              <Col xs={12}><Image className='multiple-img' src='https://www.snitch.co.in/cdn/shop/files/4MSS2901-02-M25.jpg?v=1714559228&width=120' /></Col>
              <Col xs={12}><Image className='multiple-img' src='https://www.snitch.co.in/cdn/shop/files/4MSS2901-02-M29.jpg?v=1714559228&width=120' /></Col>
            </Row>
          </Col>
          <Col sm={5} className='p-0'><Image className='single-img' src={getImage(product.p_img)} fluid /></Col>
          <Col className='ps-5'>
            <div className="product-name">{product.p_name}</div>
            <div className="product-price">Rs. {product.p_price} <br /><tax>(incl. of all taxes)</tax></div>
            <hr />

            <div className="product-color-title">Similar</div>
            <div className="d-flex mt-2">  
              {
                allproduct.map((item,ind)=>{
                  return(
                  <>
                  {
                    ind < 6 &&
                    <Image className='product-color' variant="top" src={getImage1(item.p_img)} />
                  }
                  </>
                  )
                }) 
              }
            </div>

            <div className="product-size-title mt-4">Select a Size</div>
            {product.p_size && Array.isArray(product.p_size) && (
              <div className="d-flex mt-2">
                {
                  product.p_size.map((item) => {
                    return (
                      <div className="product-size">{item}</div>
                    )
                  })
                }
              </div>
            )}

            <div className="mt-5"><button className='add-cart-btn' /* onClick={()=>dispatch(addproduct(product))}*/ onClick={() => Cart_click(product._id)} >Add To Bag</button></div>
            <div><button className="wishlist-btn"><likeicon><FaRegHeart /></likeicon> Add To Wishlist</button></div>

            <div className="product-description-title">Description</div>
            <div className="product-description">{product.p_description}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}><div className="title2">You May Also Like</div></Col>
          <div className="grid-bg">
            {
              allproduct.map((item, ind) => {
                return (
                  <>
                  {
                    ind< 10 &&
                      <Col sm={3} className='card-bg'>
                        <Card className='newarrivals-card mb-2' style={{ width: '16.8rem', float: 'left' }}>
                          <Card.Img className='newarrivals-card-img' variant="top" src={getImage1(item.p_img)} />
                          <Card.Body>
                            <Card.Text className='newarrivals-card-cate'>{item.p_category.category}</Card.Text>
                            <Card.Title className='newarrivals-card-title'>{item.p_name}</Card.Title>
                            <Card.Text className='newarrivals-card-price'>₹ {item.p_price}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                  }</>
                )
              })
            }
          </div>
        </Row>
      </div>
    </>
  )
}

export default Productdetail