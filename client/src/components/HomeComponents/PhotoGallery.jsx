import Carousel from "react-grid-carousel"
import {Link} from "react-router-dom"
import photo from '../../assets/photo-one.png'
import photoTwo from '../../assets/photo-two.png'
import photoThree from '../../assets/photo-three.png'
import photoFour from '../../assets/photo-four.png'
import photoFive from '../../assets/photo-five.png'

const PhotoGallery = () => {
  return (
    <div className="bg-[#212121] text-[#fff] py-[3%]">
      <h3 className="text-[1.2rem] lg:text-[1.8rem] font-[600]">PhotoGallery</h3>
      <Link to="/gallery" className="text-[#FF6E31] underline">Click Here</Link>
      <div className="w-[80%] mx-[auto] py-[3%]">
        <Carousel cols={5} rows={1} autoplay={1500} loop hideArrow>
          <Carousel.Item>
              <img src={photoFour} alt="" />
          </Carousel.Item>
          <Carousel.Item>
              <img src={photoFive} alt="" />
          </Carousel.Item>
          <Carousel.Item>
              <img src={photo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
              <img src={photoTwo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
              <img src={photoThree} alt="" />
          </Carousel.Item>
        </Carousel>

      </div>
    </div>
  )
}

export default PhotoGallery