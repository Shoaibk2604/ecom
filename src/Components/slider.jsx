import first from '../Assets/banner.png'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className='imagesize'>
        <img
          className="d-block "
          src={first}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='imagesize'>
        <img
          className="d-block"
          src={first}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='imagesize'>
        <img
          className="d-block"
          src={first}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;