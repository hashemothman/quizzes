import { Link } from 'react-router-dom';
import './Navbar.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  return (
   <div className="navbar">
    <nav className='zh-nav'>
      <input type='checkbox' id='check'/>
      <label for='check' className='checkbtn'>
        <FontAwesomeIcon icon={faBars}/>

      </label>
      
      <label className='logo'>Rob<span>Quiz</span></label>
      
      <ul className='zh-nav-elements'>
      <li><Link to='/quizpage'>الاختبارات الاكثر لعب</Link></li>
      <li><Link to='/category'>الفئات</Link></li>
      <li><Link to='/quizzes' >الصفحة الرئيسية</Link></li>
      {/* <li><Link to='/' className='zh-login-btn'>تسجيل دخول</Link></li> */}
      </ul>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
    </nav>
    </div>
    
  )
}

export default Navbar

