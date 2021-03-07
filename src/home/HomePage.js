import React from 'react';
import './HomePage.css';
import ImageSliderPage from '../components/imageSlider/ImageSliderPage'
import AboutPage from '../components/about/AboutPage'
import FooterComp from '../components/footer/Footer'
const HomePage = () => (
    <>
        <div>
        <ImageSliderPage/>
        <br></br>
        <AboutPage />
        <FooterComp/>
        </div>


    </>

);
export default HomePage;