import React from 'react'
import './CategoryStyle.css';
import CatogeryHero from '../../components/CategoryHero/CatogeryHero.jsx'
import Featuredcard from '../../components/Featuredcard/Featuredcard.jsx'
import newsimg1 from './../../assets/images/19197156.jpg'
import newsimg2 from './../../assets/images/images.png'
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Category = () => {
  return (
    <>
    <CatogeryHero/>
    <div className="ha-serch">
    <Form>
      <Form.Group className="mt-5 mb-5 d-flex" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Search" />
        <Button variant="primary" className="ms-5 me-5" type="submit">Search</Button>
      </Form.Group>
    </Form>
    </div>
    <div className="ha-category-card">
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
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
</>
    
  );
}

export default Category
