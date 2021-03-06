import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import './ImageSliderPage.css';
import JapaneseLR from './images/1_JAPANESE LIVING ROOM PS WITH SIGN.jpg'
import EuropeLR from './images/2_EUROPEAN STYLE LIVINGROOM sign.jpg'
import KidsLR from './images/4_KIDS BEDROOM 2.jpg'
import Interior from './images/5_RUSTIC INTERIOR PS.jpg'
import Reading from './images/6_READING SPACE.jpg'
import Bath from './images/bath .jpg'
// ,KidsLR,Interior,Reading,Bath
export class ImageSliderPage extends Component {
  render() {
    // const imagess = {"path" : [`${JapaneseLR}`, `${EuropeLR}`]};
    return (
      <>
      <div style={{backgroundImage: "url('" + `${EuropeLR}`+"')"}}class="background-image" ></div>
      <Carousel fade>
        {/* {imagess.path.map((i) => {
          return */}
        <Carousel.Item interval={4000} >
            
            <img
            className="d-block w-100"
            src={JapaneseLR}
            alt="First slide"/>
            
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        
       </Carousel.Item>
        
        
        <Carousel.Item interval={4000}>
          <img 
            className="d-block w-100"
            src={EuropeLR}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={KidsLR}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={Interior}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={Reading}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={Bath}
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> 

      </Carousel>
      </>
    );
  }


}


export default ImageSliderPage  
