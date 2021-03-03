import React from 'react';
import './HomePage.css';
import ImageSliderPage from '../components/imageSlider/ImageSliderPage'
import AboutPage from '../components/about/AboutPage'
import NavBarComp from '../components/navbar/NavBarComp'

const HomePage = () => (
    <>
        <NavBarComp />
        <ImageSliderPage/>
        <br></br>
        <AboutPage />
        

    </>

);
export default HomePage;