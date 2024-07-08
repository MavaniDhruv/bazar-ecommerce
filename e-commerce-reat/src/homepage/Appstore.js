import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

function Appstore() {
  return (
    <>
    <div className="appstore-main-bg">
        <Row className="appstore ">
            <Col sm={7} className='appstore-bg-text'>
              <div className="appstore-head mb-3">The ChawkBazar App</div>
              <div className="appstore-text mb-5">Share Your <bold>Ideas</bold> & Shop Endless <bold>Inspiration</bold></div>
              <div>
                <button className='appstore-btn me-3'><Image src='https://chawkbazar.vercel.app/assets/images/app-store.svg'/></button>
                <button className='appstore-btn'><Image src='https://chawkbazar.vercel.app/assets/images/play-store.svg'/></button>
              </div>
            </Col>
            <Col sm={5} className='appstore-bg-img2'>
              <Image className='phone-img ps-4' src='https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp3.png&w=384&q=75'/>
            </Col>
        </Row>
    </div>
    </>
  )
}
 
export default Appstore