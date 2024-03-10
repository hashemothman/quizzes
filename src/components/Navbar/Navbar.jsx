import { Link } from 'react-router-dom';
import './Navbar.css'
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
      <label className='logo'>Rob.<span>Quiz</span></label>
      <ul className='zh-nav-elements'>
      <li><Link to='/' >الصفحة الرئيسية</Link></li>
      <li><Link to='/category'>الفئات</Link></li>
      <li><Link to='/'>الاختبارات الاكثر لعب</Link></li>
      <li><Link to='/' className='zh-login-btn'>تسجيل دخول</Link></li>
      </ul>
    </nav>
    </div>
    
  )
}

export default Navbar

