import React from 'react'
import Mainslider from './homepage/Mainslider';
import CategorySlider from './homepage/CategorySlider';
import Newarrivals from './homepage/Newarrivals';
import Parallaxbg from './homepage/Parallaxbg';
import Offerbanner1 from './homepage/Offerbanner1';
import Offerbanner2 from './homepage/Offerbanner2';
import Blackpart from './homepage/Blackpart';
import Brandslider from './homepage/Brandslider';
import Appstore from './homepage/Appstore';
import Review from './homepage/Review';

function Home () {
    return(
        <>
            <Mainslider/>
            <CategorySlider/>
            <Newarrivals/>
            <Parallaxbg/>
            <Offerbanner1/>
            {/* <Offerbanner2/> */}
            <Blackpart/>
            <Brandslider/>
            <Appstore/>
            <Review/>
        </>
    )
}
export default Home;