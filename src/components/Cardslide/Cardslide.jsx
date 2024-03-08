import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cardslide.css'
import newsimg from './../../assets/images/images.png'
import newsimg2 from './../../assets/images/19197156.jpg'
import newsimg3 from './../../assets/images/heroimg.jpg'
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
const Cardslide = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='React-slide'>
        <Slider {...settings}>
        <div>
        <Card img={newsimg}
            title="zhraa"
            title1="ali"
            difficulty='easy'
            question='quiz'/>
        </div>
        <Card img={newsimg2}
            title="zhraa"
            title1="ali"
            difficulty='easy'
            question='quiz'/>
        <Card img={newsimg3}
            title="zhraa"
            title1="ali"
            difficulty='easy'
            question='quiz'/>
    
    
  </Slider>
    </div>
  )
}

export default Cardslide