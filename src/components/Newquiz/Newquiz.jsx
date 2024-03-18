import './Newquiz.css'
import img from './../../assets/images/quiz.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Newquiz = (props) => {
  return (

    
        
          <div className='zh-newquiz'>
    

    <Link to='/quizpage'>
    <Card style={{ width: '13rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text 

    </Card.Text>
    
  </Card.Body>
</Card>
    </Link>
</div>
        
    
    
  )
}

export default Newquiz