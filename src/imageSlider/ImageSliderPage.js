import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import './ImageSliderPage.css';
export class ImageSliderPage extends Component {
  render() {

    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/YFvDoo4E8xsE3dEVaN5GZR.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://uploads-ssl.webflow.com/5894a32730554b620f7bf36d/5e848c206948e110eb2313e0_5c5423211c89029edcf04512_How-to-Achieve-Photo-Realistic-3D-Renders-in-2019-and-Beyond-EASY-RENDER.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://lumion.com/wp-content/uploads/2016/05/01ss-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


}


export default ImageSliderPage  
