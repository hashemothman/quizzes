import React from 'react'
import Hero from '../../components/Hero/Hero'
import newsimg from './../../assets/images/images.png'
import newsimg2 from './../../assets/images/19197156.jpg'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'

import Trending from '../../components/Trending/Trending'
import Container from '../../components/Container/Container'
import Categories from '../../components/Categories/Categories'
import Categorycontainer from '../../components/Categorycontainer/Categorycontainer'
import Newquiz from '../../components/Newquiz/Newquiz'
import Newquizcontainer from '../../components/Newquizcontainer/Newquizcontainer'



const Home = () => {
  return (
    <>
      <Hero/>
      


      <Newquizcontainer/>
      
      {/* <News title='Promotion'
            title2='We Provide You Best Europe Sightseeing Tours'
            desc='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
             Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
              illum aut optio quibusdam!'
            btn='Start Quiz'
            img={newsimg}
      />
      <News title='Promotion'
            title2='We Provide You Best Europe Sightseeing Tours'
            desc='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
             Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
              illum aut optio quibusdam!'
            btn='Start Quiz'
            img={newsimg2}
      />  */}
      
      {/* <Cardslide img={newsimg}
            title="zhraa"
            title1="ali"
            difficulty='easy'
            question='quiz'/>

      {/* <Categories/> */}
      <Categorycontainer/>
      <Trending/>
      <Container/>
    </>
  )
}

export default Home