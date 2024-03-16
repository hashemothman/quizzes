import './Newquiz.css'
import img from './../../assets/images/quiz.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Newquiz = () => {
  return (

    
        <div className='zh-newquiz'>
        {/* <div className='zh-newquiz-card'>
            <div className='zh-newquiz-img'>
                <img src={img}/>
            </div>

            <div className='zh-newquiz-body'>
                <p className='title'>Et labore harum non nobis ipsum eum molestias mollitia .</p>
                <p className='date'>Let's start</p>
            </div>
        </div> */}

        <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the

        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    
    
  )
}

export default Newquiz