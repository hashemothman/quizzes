import React from 'react'
import './TestStyle.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/images/images.png'
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form'



const Tests = () => {
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
        <div className="ha-container-test">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top p-3" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ha-button'><Link to='/quizpage'> Go Quizze</Link></Button>
      </Card.Body>
    </Card>
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