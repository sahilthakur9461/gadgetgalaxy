import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import slider from '../img/slider.jpg'
import slider2 from '../img/silder2.webp'
import slider3 from '../img/slider3.jpg'
import CategorySection from '../modules/CategorySection';
import Services from '../modules/Services';
const Home = () => {
 
  return (
    <>
    
    <Carousel data-bs-theme="dark" > 
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={slider}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100  "
          src={slider2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100  "
          src={slider3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
    <CategorySection/>
    <Services/>
    </>
  )
}

export default Home
