import './Categories.css'
import categoryimg from './../../assets/images/19197156.jpg'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='zh-category'>
      <div className='box'>
        <div className='content'>
          <img src={categoryimg}/>
          <h2>Quiz Time<br/><span>Let's start</span></h2>
          <Link to='/'>Click</Link>
        </div>
      </div>
    </div>
  )
}

export default Categories