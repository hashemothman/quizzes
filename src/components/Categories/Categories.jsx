import './Categories.css'
import categoryimg from './../../assets/images/heroimg.jpg'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='zh-category'>
          <Link to='/'>
            <div className="ha-category-content">
            <img src={categoryimg} alt="" />
            <h3>Category Name</h3>
            </div>
          </Link>
    </div>
  )
}

export default Categories