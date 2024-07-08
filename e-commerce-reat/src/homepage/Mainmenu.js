import React from 'react';

import { SlMenu } from "react-icons/sl";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter ,FaPinterest, FaLinkedinIn} from "react-icons/fa6";

import { Image } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

import { TfiUser, TfiHeart, TfiBag, TfiSearch } from "react-icons/tfi";
import { Background } from 'react-parallax';

function Mainmenu() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="menu-bg">
                <div className="sub-menu"><button className='sub-menu-btn' onClick={handleShow}><SlMenu /></button></div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton style={{borderBottom:"solid 1px rgb(195, 195, 195)",backgroundColor:"rgb(230, 230, 230)"}}>
                    <PiUserCircleDuotone className='sub-menu-login-icon'/>
                        <Offcanvas.Title className='sub-menu-li'>Log in</Offcanvas.Title> 
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul>
                            <li className='sub-menu-li'>New Arrivals</li>
                            <hr />
                            <li className='sub-menu-li'>Best Selling</li>
                            <hr />
                            <li className='sub-menu-li'>Suits & Blazers</li>
                            <hr />
                            <li className='sub-menu-li'>Shop</li>
                            <hr />
                            <li className='sub-menu-li'>Track Order</li>
                            <hr />
                            <li className='sub-menu-li'>Place a <br />Return/Exchage <br />Request</li>
                            <hr />
                            <li className='sub-menu-li'>Affiliate Program</li>
                            <hr />
                            <li className='sub-menu-li'>Customer Support</li>
                            <hr />
                            <li className='sub-menu-li'>Visit Store</li>
                            <hr />
                            <li className='sub-menu-li'>Relove</li>
                            <hr />
                            <li >
                                <table style={{width:"100%"}}>
                                    <tr>
                                        <td className='sub-menu-icon'><FaInstagram /></td>
                                        <td className='sub-menu-icon'><FaFacebook /></td>
                                        <td className='sub-menu-icon'><FaYoutube /></td>
                                    </tr>
                                    <tr>
                                        <td className='sub-menu-icon'><FaTwitter /></td>
                                        <td className='sub-menu-icon'><FaPinterest /></td>
                                        <td className='sub-menu-icon'><FaLinkedinIn /></td>
                                    </tr>
                                </table>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>

                <div className='text-center'><a href="/"><Image className='main-logo' src='https://bazaar.qodeinteractive.com/wp-content/uploads/2017/07/landing-top-img-1.png' /></a></div>

                <div className='menu-icon-bg'>
                    <div><a className='menu-icon' href="#user"><TfiUser /></a></div>
                    <div><a className='menu-icon' href="#search"><TfiSearch /></a></div>
                    <div><a className='menu-icon' href="#heart"><TfiHeart /></a></div>
                    <div><a className='menu-icon' href="/cart"><TfiBag /></a></div>
                </div>
            </div>
        </>
    )
}

export default Mainmenu