import React from 'react'
import Quiz from '../../components/Quiz/Quiz'
import './Quizpage.css'
import img from './../../assets/images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg'
import img2 from './../../assets/images/images.png'
import Multichoise from '../../components/Multichoise/Multichoise'
// import Multichoise from '../../components/Multichoise/Multichoise'
const Quizpage = () => {
  return (
    <div className='zh-quiz-page-container'>
      <div className='zh-quiz-page'>
        <img src={img}/>
        {/* <Quiz/> */}
        <Multichoise/>
    </div>
    <img className='img-quiz' src={img2}/>
    </div>
  )
}

export default Quizpage