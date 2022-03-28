import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './Reviews.css'
const Reviews = () => {

  return (
  <div className='testimonial-container' id="review">
      <h1>PATIENTS REVIEWS</h1>
    <Carousel variant="dark">
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/author-image.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#299AEF'}}>Patient</span> Name</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
              Lorem ipsum is placeholder text commonly used in the graphic, print,
             and publishing industries for previewing layouts and visual mockups.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/author-image.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'##299AEF'}}>Patient</span> Name</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
             and publishing industries for previewing layouts and visual mockups.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Reviews