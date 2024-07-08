import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <Row className='input-bg'>
            <Col>
              <div className="input-title">Get Expert Tips In Your Inbox</div>
              <div className="input-subtitle">Subscribe to our newsletter and stay updated.</div>
            </Col>
            <Col>
              <form method="post">
                <div><input type="email" placeholder='Write your email here' className="input-text" /></div>
                <div><button className="subscribe-btn">Subscribe</button></div>
              </form>
            </Col>
          </Row>
          <Row className='mb-5 pb-5'>
            <Col sm={2}>
              <div className="footer-title">Social</div>
              <div><a href="/instagram" className="footer-link"><FaInstagram className='me-2' />Instagram</a></div>
              <div><a href="/twitter" className="footer-link"><FaTwitter className='me-2' />Twitter</a></div>
              <div><a href="/facebook" className="footer-link"><FaFacebook className='me-2' />Facebook</a></div>
              <div><a href="/youtube" className="footer-link"><FaYoutube className='me-2' />Youtube</a></div>
            </Col>
            <Col sm={2}>
              <div className="footer-title">Contact</div>
              <div><a href="" className="footer-link">Contact Us</a></div>
              <div><a href="" className="footer-link">yourexample@email.com</a></div>
              <div><a href="" className="footer-link">example@email.com</a></div>
              <div><a href="" className="footer-link">Call us:+1 254 564-8542</a></div>
            </Col>
            <Col sm={2}>
              <div className="footer-title">About</div>
              <div><a href="" className="footer-link">Support Center</a></div>
              <div><a href="" className="footer-link">Customer Support</a></div>
              <div><a href="" className="footer-link">About Us</a></div>
              <div><a href="" className="footer-link">Copyright</a></div>
            </Col>
            <Col sm={2}>
              <div className="footer-title">Customer Care</div>
              <div><a href="" className="footer-link">FAQ & Helps</a></div>
              <div><a href="" className="footer-link">Shipping & Delivery</a></div>
              <div><a href="" className="footer-link">Return & Exchanges</a></div>
            </Col>
            <Col sm={2}>
              <div className="footer-title">Our Information</div>
              <div><a href="" className="footer-link">Privacy policy update</a></div>
              <div><a href="" className="footer-link">Terms & Conditions</a></div>
              <div><a href="" className="footer-link">Return Policy</a></div>
              <div><a href="" className="footer-link">Site Map</a></div>
            </Col>
            <Col sm={2}>
              <div className="footer-title">Top Categories</div>
              <div><a href="" className="footer-link">Men's Wear</a></div>
              <div><a href="" className="footer-link">Women's Wear</a></div>
              <div><a href="" className="footer-link">Kid's Wear</a></div>
              <div><a href="" className="footer-link">Sports Wear</a></div>
            </Col>
          </Row>
          <hr />
          <Row className='mb-4 mt-4'>
            <Col><div className="footer-endline">Copyright © 2024 <redq>REDQ</redq>  All rights reserved</div></Col>
            <Col className='d-flex justify-content-end'>
              <Image className='ms-4' src='https://chawkbazar.vercel.app/assets/images/payment/mastercard.svg' />
              <Image className='ms-4' src='https://chawkbazar.vercel.app/assets/images/payment/visa.svg' />
              <Image className='ms-4' src='https://chawkbazar.vercel.app/assets/images/payment/paypal.svg' />
              <Image className='ms-4' src='https://chawkbazar.vercel.app/assets/images/payment/jcb.svg' />
              <Image className='ms-4' src='https://chawkbazar.vercel.app/assets/images/payment/skrill.svg' />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Footer