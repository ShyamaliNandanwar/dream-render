import React from 'react';
import './HomePage.css';
import ImageSliderPage from '../components/imageSlider/ImageSliderPage'
import AboutPage from '../components/about/AboutPage'

const HomePage = () => (
    <>
        <div>
        <ImageSliderPage/>
        <br></br>
        <AboutPage />
        </div>

    </>

);
export default HomePage;