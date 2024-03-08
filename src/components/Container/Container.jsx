import Featuredcard from '../Featuredcard/Featuredcard'
import './Container.css'
import newsimg1 from './../../assets/images/19197156.jpg'
import newsimg2 from './../../assets/images/images.png'
const Container = () => {
  return (
    <div className='zh-container'>
        <h1>Featured Quizzes</h1>
        <div className='zh-inner-container'>
        <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        <Featuredcard smcardimg1={newsimg1}
                      smcardimg1sm={newsimg2}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        <Featuredcard smcardimg1={newsimg1}
                      smcardimg1sm={newsimg2}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        <Featuredcard smcardimg1={newsimg1}
                      smcardimg1sm={newsimg2}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        <Featuredcard smcardimg1={newsimg1}
                      smcardimg1sm={newsimg2}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        <Featuredcard smcardimg1={newsimg1}
                      smcardimg1sm={newsimg2}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        </div>
        
    </div>
  )
}

export default Container