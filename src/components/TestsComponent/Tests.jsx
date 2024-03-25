import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestStyle.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/images/images.png'
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form'
import Newquiz from '../Newquiz/Newquiz';
import Newquizslide from './../Newquizslide/Newquizslide'


const Tests = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay:false,
    autoplayspeed:2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }
      ]
  };
  return (
    <div>
         <div className="hero-test">
            <h3>ALL TESTS</h3>
        </div>
        <div className="ha-serch">
    <Form>
      <Form.Group className="mt-5 mb-5 d-flex" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Search" />
        <Button variant="primary" className="ms-5 me-5" type="submit">Search</Button>
      </Form.Group>
    </Form>
    </div>
        {/* <div className="ha-container-test">
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
        </div> */}
        {/* <Newquizslide/> */}
        <div className='React-slide'>
        <Slider {...settings}>
        <div>
        <Newquiz />
        </div>
        <Newquiz/>
        <Newquiz />
        <Newquiz/>
        <Newquiz/>
        <Newquiz/>
        <Newquiz/>
    
  </Slider>
    </div>
        <div className="ha-pagination">
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
   

      <Pagination.Ellipsis />
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </div>
    </div>
  )
}

export default Tests