import React, { useState, useEffect } from 'react';
import { Col, Image, Row, Card } from 'react-bootstrap'
import { TfiUser, TfiLocationPin, TfiBag, TfiHeart, TfiEye, TfiLock, TfiPowerOff } from "react-icons/tfi";
import { PiHandCoinsFill, PiUserSwitchLight, PiCoinThin } from "react-icons/pi";
import { BsClockHistory } from "react-icons/bs";
import { GoPlusCircle, GoNoEntry } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Cart() {

    // const dispatch = useDispatch();

    // const cartdata = useSelector((state) => state.cart_data.cart_data)
    // console.log(cartdata)

    const [qnty, setqnty] = useState(1)

    const plus = () => {
        if (qnty < 5) {
            setqnty(qnty + 1)
        }
        else {
            alert("max")
        }
    }

    const minus = () => {
        if (qnty > 1) {
            setqnty(qnty - 1)
        }
    }


    const [cartdata, setcartdata] = useState([])

    
    useEffect(() => {
        
        axios.get(`http://localhost:3001/user/view_cart`)
        .then(function (res) {
            setcartdata(res.data.data);
            // console.log(res.data.data[0].product_id, "sdasd");
            
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
        // console.log("hello")
        return `http://localhost:3001/images/${imageName}`;
    };

    const [currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => {
        let animationFrameId;

        const updateTime = () => {
            setCurrentTime(new Date());
            animationFrameId = requestAnimationFrame(updateTime);
        };

        // Start updating time
        animationFrameId = requestAnimationFrame(updateTime);

        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="cart-container">

                <Row>
                    <Col sm={4} className="cart-menu">
                        <Row className="user-bg">
                            <Col sm={4}><div className="user-logo">
                                <Image className="user-img" src="" /></div>
                            </Col>
                            <Col>
                                <div className="user-name">Dhruv Mavani <div className="live-time"><BsClockHistory className='clock-icon' /> {currentTime.toLocaleTimeString()}</div></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="profile"><TfiUser /> My Profile</div>
                                <div className="profile"><TfiLocationPin /> Delivery Address</div>
                                <hr />
                                <div className="profile"><TfiBag /> My Orders</div>
                                <hr />
                                <div className="profile"><PiHandCoinsFill /> My Credits</div>
                                <div className="profile"><PiCoinThin /> How To Earn</div>
                                <div className="profile"><PiCoinThin /> How To Spend</div>
                                <hr />
                                <div className="profile"><TfiHeart /> My Wishlist</div>
                                <div className="profile"><TfiEye /> Recently Viewed</div>
                                <hr />
                                <div className="profile"><PiUserSwitchLight /> Refer Friend</div>
                                <hr />
                                <div className="profile"><TfiLock /> Change Password</div>
                                <div className="logout"><TfiPowerOff /> Log Out</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={9}>
                        <div className="good">Good Morning! Dhruv</div>
                        {cartdata.length > 0 ? (

                            <div className="cart-view-2">
                                {
                                    cartdata.map((product, ind) => {
                                        // console.log(product.product_id.p_img);
                                        return (
                                            <>
                                                <div className="prod-box">
                                                    <div className="prod-name">{product.product_id.p_name}</div>
                                                    <div><Image className="prod-img" src={getImage(product.product_id.p_img)} /></div>
                                                    <div className="prod-price">INR {product.product_id.p_price}</div>
                                                    <div>
                                                        <select className="prod-size">
                                                            {product.product_id.p_size.map((item) => {
                                                                return (
                                                                    <option>{product.product_id.p_color} / {item}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="qnty">
                                                        <button className='minus-btn' onClick={() => { minus() }}><GoNoEntry /></button>
                                                        {qnty}
                                                        <button className='plus-btn' onClick={() => { plus() }}><GoPlusCircle /></button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        ) : (

                            <div className="cart-view">
                                <div><Image className="cart-img" src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp" /></div>
                                <div className="cart-line1">You haven't placed any orders yet. <br />We can't wait to have you as a customer.</div>
                                <div className="cart-line2">Take a look at our products here</div>
                                <div><button className="view-product-btn">View Product</button></div>
                            </div>
                        )
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Cart