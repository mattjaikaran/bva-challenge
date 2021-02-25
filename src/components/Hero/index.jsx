import React from 'react'
import { Carousel, Button, Row, Col, Image } from 'react-bootstrap'
import heroImg from '../../assets/hero_img.png'
import './Hero.css'

const Hero = () => {
  return (
    <Carousel 
      interval={10000}
      indicators={false}
      controls={false}>
      <Carousel.Item>
        <Image
          className="d-block carouselImg"
          src={heroImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="heroText">
            <h3>Hero Title1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam fuga mollitia reprehenderit deleniti, ullam veritatis dolores perspiciatis molestias excepturi saepe minima quia aut quam.</p>
            <Button variant="success" className="carouselBtn">Read More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block carouselImg"
          src={heroImg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="heroTextTwo">
            <Row>
              <Col></Col>
              <Col md={6}>
                <h3>Hero Title2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam fuga mollitia reprehenderit deleniti, ullam veritatis dolores perspiciatis molestias excepturi saepe minima quia aut quam.</p>
                <Button variant="success" className="carouselBtn">Read More</Button>
              </Col>
            </Row>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block carouselImg"
          src={heroImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="heroTextThree">
            <Row>
              <Col md={6}>
                <h3>Hero Title3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam fuga mollitia reprehenderit deleniti, ullam veritatis dolores perspiciatis molestias excepturi saepe minima quia aut quam.</p>
                <Button variant="success" className="carouselBtn">Read More</Button>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero