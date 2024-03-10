import React from 'react'
import './CategoryStyle.css';
import CatogeryHero from '../../components/CategoryHero/CatogeryHero.jsx'
import Featuredcard from '../../components/Featuredcard/Featuredcard.jsx'
import newsimg1 from './../../assets/images/19197156.jpg'
import newsimg2 from './../../assets/images/images.png'

const Category = () => {
  return (
    <>
    <CatogeryHero/>
    <div className="ha-category-card">
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
    <Featuredcard smcardimg1={newsimg2}
                      smcardimg1sm={newsimg1}
                      title1='Quizzes'
                      title1sm='Quiz time'
                      desc1='Hello world'
                      desc1sm='Hello world sm'
                    //   date='4-3-2024'
        />
        </div>
   
    </>
    
  )
}

export default Category
