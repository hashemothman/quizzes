import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Newquizslide.css'
import Newquiz from "../Newquiz/Newquiz";

const Newquizslide = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:false,
        autoplayspeed:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
              }
            }
          ]
      };
  return (
    <div className='React-slide'>
        <Slider {...settings}>
        <div>
        <Newquiz />
        </div>
        <Newquiz />
        <Newquiz />
        <Newquiz/>
        <Newquiz/>
        <Newquiz/>
        <Newquiz/>
    
  </Slider>
    </div>
  )
}

export default Newquizslide