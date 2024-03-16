import React from 'react'
import Newquiz from '../Newquiz/Newquiz'
import './Newquizcontainer.css'
const Newquizcontainer = () => {
  return (
    <div className='zh-newquiz-container'>
        <h1>New Quizzes</h1>
        <div className='zh-newquiz-cards'>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
            <Newquiz/>
        </div>
    </div>
  )
}

export default Newquizcontainer