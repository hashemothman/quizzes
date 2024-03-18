import React from 'react'
import Newquiz from '../Newquiz/Newquiz'
import './Newquizcontainer.css'
import Newquizslide from '../Newquizslide/Newquizslide'
const Newquizcontainer = () => {
  return (
    <div className='zh-newquiz-container'>
        <h1>New Quizzes</h1>
        <div className='zh-newquiz-cards'>
            <Newquizslide/>
        </div>
    </div>
  )
}

export default Newquizcontainer