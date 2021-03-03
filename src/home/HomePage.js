import React from 'react';
import './HomePage.css';
import ImageSliderPage from '../components/imageSlider/ImageSliderPage'
import AboutPage from './../about/AboutPage'
import NavBarComp from './../components/NavBarComp'

const HomePage = () => (
    <>
        <NavBarComp />
        <br></br>
        <h3>Welcome to our page!</h3>
        <ImageSliderPage/>
        <br></br>
        <AboutPage />
        

    </>

);
export default HomePage;